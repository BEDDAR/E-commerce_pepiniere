module.exports = (sequelize, DataTypes) => {

    const Commandes = sequelize.define("commandes", {
        id:{
            type:DataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
       }, {
        timestamps: false
    },{paranoid:true})

    return Commandes
}