module.exports = (sequelize, DataTypes) => {

    const Utilisateurs = sequelize.define("utilisateurs", {
        id:{
            type:DataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        nom: {
            type: DataTypes.STRING(100),
            allowNull:false
        },
        prenom: {
            type: DataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        pseudo: {
            type: DataTypes.STRING(100),
            allowNull:false
        },
        type_de_compte: {
            type: DataTypes.ENUM('Admin','Client')
        },
        email: {
            type: DataTypes.STRING,
            validate:{                                //validation des données
                isEmail:true
            }
        },
        telephone: {
            type: DataTypes.INTEGER
        },
        mot_de_passe: {
            type: DataTypes.STRING(64),
            is: /^[0-9a-f](64)$/i
        }
    },{
        timestamps: false
      },{paranoid:true}) // Ici pour faire de softDelete

    return Utilisateurs
}