const dbConfig = require('../config/dbConfig.js')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected...')
    })
    .catch(err => {
        console.log('error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Produits = require('./produitsModel.js')(sequelize, DataTypes)
db.noteAvis = require('./noteAvisModel.js')(sequelize, DataTypes)
db.utilisateurs = require('./utilisateursModel.js')(sequelize, DataTypes)
db.commandes = require('./commandeModel.js')(sequelize, DataTypes)
db.contenuCommandes = require('./contenuCommandeModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes resync done')
    })


//1 to many relation
db.Produits.hasMany(db.noteAvis, {
    foreignKey: 'id_produit',
    as:'note_avis'
})

db.noteAvis.belongsTo(db.Produits, {
    foreignKey: 'id_produit',
    as:'produits'
})
    // Ajouter une colonne virtuelle "note" à votre modèle Produit
    db.Produits.addScope('withAverageNote', {
        attributes: {
            include: [
                [sequelize.fn('AVG', sequelize.col('note_avis.note')), 'note'],
            ],
        },
        include: [{
            model: db.noteAvis,
            as: 'note_avis',
            attributes: [],
        }],
        group: ['produits.id'], // Grouper par l'identifiant du produit
    });


    db.utilisateurs.hasMany(db.noteAvis, {
        foreignKey: 'id_client',
        as:'note_avis'
    })
    
    db.noteAvis.belongsTo(db.utilisateurs, {
        foreignKey: 'id_client',
        as:'utilisateurs'
    })

    
    db.utilisateurs.hasMany(db.commandes, {
        foreignKey: 'id_client',
        as:'commandes'
    })
    
    db.commandes.belongsTo(db.utilisateurs, {
        foreignKey: 'id_client',
        as:'utilisateurs'
    })

    db.commandes.hasMany(db.contenuCommandes, {
        foreignKey: 'id_commande',
        as:'contenuCommandes'
    })
    
    db.contenuCommandes.belongsTo(db.commandes, {
        foreignKey: 'id_commande',
        as:'commandes'
    })

    db.Produits.hasMany(db.contenuCommandes, {
        foreignKey: 'id_produit',
        as:'contenuCommandes'
    })
    
    db.contenuCommandes.belongsTo(db.Produits, {
        foreignKey: 'id_produit',
        as:'produits'
    })

module.exports = db