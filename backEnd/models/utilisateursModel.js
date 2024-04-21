module.exports = (sequelize, DataTypes) => {

    const Utilisateurs = sequelize.define("utilisateurs", {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        pseudo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        type_de_compte: {
            type: DataTypes.ENUM('Admin', 'Client'),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {                                //validation des données
                isEmail: {
                    msg: 'L\'adresse e-mail doit être valide.'
                },
            }
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                    msg: 'Le numéro de téléphone doit être au format international valide.'
                }
            }
        },
        mot_de_passe: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    }, { paranoid: true }) // Ici pour faire de softDelete

    return Utilisateurs
}