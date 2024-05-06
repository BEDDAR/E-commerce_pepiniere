// Exportation d'une fonction qui définit le modèle Utilisateurs
module.exports = (sequelize, DataTypes) => {
    // Définition du modèle Utilisateurs avec sequelize.define()
    const Utilisateurs = sequelize.define("utilisateurs", {
        // Définition des colonnes de la table utilisateurs avec leurs types de données et contraintes
        id: {
            type: DataTypes.INTEGER(10),   // Type de données INTEGER avec une longueur de 10 chiffres
            primaryKey: true,              // Définition de la clé primaire
            autoIncrement: true            // Auto-incrémentation de la clé primaire
        },
        nom: {
            type: DataTypes.STRING(100),   // Type de données STRING avec une longueur maximale de 100 caractères
            allowNull: false               // La valeur ne peut pas être nulle
        },
        prenom: {
            type: DataTypes.STRING(100),   // Type de données STRING avec une longueur maximale de 100 caractères
            allowNull: false               // La valeur ne peut pas être nulle
        },
        pseudo: {
            type: DataTypes.STRING(100),   // Type de données STRING avec une longueur maximale de 100 caractères
            allowNull: false               // La valeur ne peut pas être nulle
        },
        type_de_compte: {
            type: DataTypes.ENUM('Admin', 'Client'), // Type de données ENUM avec des valeurs 'Admin' ou 'Client'
            allowNull: false               // La valeur ne peut pas être nulle
        },
        email: {
            type: DataTypes.STRING,        // Type de données STRING pour l'adresse e-mail
            allowNull: false,              // La valeur ne peut pas être nulle
            unique: true,                 // L'adresse e-mail doit être unique dans la table
            validate: {                   // Validation des données
                isEmail: {                  // Vérification si l'adresse e-mail est valide
                    msg: 'L\'adresse e-mail doit être valide.' // Message d'erreur personnalisé en cas d'échec de validation
                },
            }
        },
        telephone: {
            type: DataTypes.STRING,        // Type de données STRING pour le numéro de téléphone
            allowNull: false,              // La valeur ne peut pas être nulle
            validate: {                   // Validation des données
                is: {                      // Vérification si le numéro de téléphone est au format international valide
                    args: /^\+(?:[0-9] ?){6,14}[0-9]$/, // Expression régulière pour le format du numéro de téléphone
                    msg: 'Le numéro de téléphone doit être au format international valide.' // Message d'erreur personnalisé en cas d'échec de validation
                }
            }
        },
        mot_de_passe: {
            type: DataTypes.STRING,        // Type de données STRING pour le mot de passe
            allowNull: false               // La valeur ne peut pas être nulle
        }
    }, {
        timestamps: false,                // Désactivation de l'ajout automatique des timestamps createdAt et updatedAt
        paranoid: true                   // Activation du soft delete (paranoid mode)
    });

    return Utilisateurs; // Retourne le modèle Utilisateurs
};