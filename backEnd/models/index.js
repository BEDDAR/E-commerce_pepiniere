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
        host: dbConfig.HOST, // Adresse du serveur de la base de données
        dialect: dbConfig.dialect,// Type de dialecte de la base de données (par exemple, 'mysql', 'postgres', etc.)
        port: '3306'
    },

);

/*const sequelize = new Sequelize(`mysql://root:password@mysql:3306/projet`, {
    dialect: 'mysql',
});*/

// Authentification de la connexion à la base de données
sequelize.authenticate()
    .then(() => {
        console.log('connected...'); // Affichage du message 'connected...' lorsque la connexion est réussie
    })
    .catch(err => {
        console.log('error la connexion à la base de donnée échoue ' + err); // Affichage de l'erreur si la connexion échoue
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


// Association entre utilisateurs et noteAvis : un utilisateur peut avoir plusieurs notes/avis
db.utilisateurs.hasMany(db.noteAvis, {
    foreignKey: 'id_client',   // Clé étrangère qui relie la table noteAvis à la table utilisateurs
    as: 'note_avis'            // Alias utilisé pour accéder à cette relation
});

// Association inverse : une note/avis appartient à un utilisateur
db.noteAvis.belongsTo(db.utilisateurs, {
    foreignKey: 'id_client',   // Clé étrangère qui relie la table noteAvis à la table utilisateurs
    as: 'utilisateurs'         // Alias utilisé pour accéder à cette relation
});

// Association entre utilisateurs et commandes : un utilisateur peut passer plusieurs commandes
db.utilisateurs.hasMany(db.commandes, {
    foreignKey: 'id_client',   // Clé étrangère qui relie la table commandes à la table utilisateurs
    as: 'commandes'            // Alias utilisé pour accéder à cette relation
});

// Association inverse : une commande appartient à un utilisateur
db.commandes.belongsTo(db.utilisateurs, {
    foreignKey: 'id_client',   // Clé étrangère qui relie la table commandes à la table utilisateurs
    as: 'utilisateurs'         // Alias utilisé pour accéder à cette relation
});

// Association many-to-many (N:N) entre commandes et produits via une table intermédiaire contenuCommandes
db.commandes.belongsToMany(db.Produits, { through: db.contenuCommandes });
// Association inverse many-to-many (N:N) entre produits et commandes via la table intermédiaire contenuCommandes
db.Produits.belongsToMany(db.commandes, { through: db.contenuCommandes });

// Export des modèles et des associations
module.exports = db;