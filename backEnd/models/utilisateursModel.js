module.exports = (sequelize, DataTypes) => {

    const Utilisateurs = sequelize.define("utilisateurs", {

        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        type_de_compte: {
            type: DataTypes.ENUM('Admin','Client')
        },
        email: {
            type: DataTypes.STRING
        },
        telephone: {
            type: DataTypes.INTEGER
        },
        mot_de_passe: {
            type: DataTypes.STRING
        }
    },{
        timestamps: false
      })
    return Utilisateurs
}