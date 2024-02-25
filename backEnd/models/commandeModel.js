module.exports = (sequelize, DataTypes) => {

    const Commandes = sequelize.define("commandes", {

       }, {
        timestamps: false
    })

    return Commandes
}