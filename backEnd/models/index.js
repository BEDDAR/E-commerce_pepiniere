// Importation de la configuration de la base de données à partir du fichier dbConfig.js
const dbConfig = require('../config/dbConfig.js');

// Importation des modules Sequelize et DataTypes depuis la bibliothèque sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Création d'une nouvelle instance Sequelize avec les informations de connexion de la base de données
const sequelize = new Sequelize(
    dbConfig.DB,         // Nom de la base de données
    dbConfig.USER,       // Nom d'utilisateur de la base de données
    dbConfig.PASSWORD,   // Mot de passe de la base de données
    {
        host: dbConfig.HOST,     // Adresse du serveur de la base de données
        dialect: dbConfig.dialect // Type de dialecte de la base de données (par exemple, 'mysql', 'postgres', etc.)
    }
);

// Authentification de la connexion à la base de données
sequelize.authenticate()
    .then(() => {
        console.log('connected...'); // Affichage du message 'connected...' lorsque la connexion est réussie
    })
    .catch(err => {
        console.log('error' + err); // Affichage de l'erreur si la connexion échoue
    });

// Initialisation d'un objet vide pour stocker les modèles de base de données
const db = {};

// Assignation des instances Sequelize et sequelize à l'objet db
db.Sequelize = Sequelize; // Sequelize est une classe fournie par Sequelize pour interagir avec la base de données
db.sequelize = sequelize; // sequelize est une instance de Sequelize qui représente la connexion à la base de données

// Chargement des modèles de données et association à l'objet db
db.Produits = require('./produitsModel.js')(sequelize, DataTypes); // Chargement du modèle Produits et association à db.Produits
db.noteAvis = require('./noteAvisModel.js')(sequelize, DataTypes); // Chargement du modèle noteAvis et association à db.noteAvis
db.utilisateurs = require('./utilisateursModel.js')(sequelize, DataTypes); // Chargement du modèle utilisateurs et association à db.utilisateurs
db.commandes = require('./commandeModel.js')(sequelize, DataTypes); // Chargement du modèle commandes et association à db.commandes
db.contenuCommandes = require('./contenuCommandeModel.js')(sequelize, DataTypes); // Chargement du modèle contenuCommandes et association à db.contenuCommandes

// Synchronisation des modèles avec la base de données
// La méthode sync() crée automatiquement les tables dans la base de données si elles n'existent pas déjà
// L'option { force: false } indique de ne pas supprimer les tables existantes avant de les recréer
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes resync done'); // Affichage du message 'yes resync done' lorsque la synchronisation est terminée
    });


//1 to many relation
db.Produits.hasMany(db.noteAvis, {
    foreignKey: 'id_produit',
    as: 'note_avis'
})

db.noteAvis.belongsTo(db.Produits, {
    foreignKey: 'id_produit',
    as: 'produits'
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
    as: 'note_avis'
})

db.noteAvis.belongsTo(db.utilisateurs, {
    foreignKey: 'id_client',
    as: 'utilisateurs'
})


db.utilisateurs.hasMany(db.commandes, {
    foreignKey: 'id_client',
    as: 'commandes'
})

db.commandes.belongsTo(db.utilisateurs, {
    foreignKey: 'id_client',
    as: 'utilisateurs'
})

db.commandes.belongsToMany(db.Produits, { through: db.contenuCommandes });
db.Produits.belongsToMany(db.commandes, { through: db.contenuCommandes });

module.exports = db