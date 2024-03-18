module.exports = (sequelize, DataTypes) => {

    const contenuCommandes = sequelize.define("contenu_commande", {
        prix: {
            type: DataTypes.DOUBLE
        },
       quantite: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.DOUBLE
        },
    }, {
        timestamps: false
    },{paranoid:true})

    return contenuCommandes
}