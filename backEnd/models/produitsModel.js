module.exports = (sequelize, DataTypes) => {

    const produits = sequelize.define("produits", {

        nom: {
            type: DataTypes.STRING
        },
        descriptionCourte: {
            type: DataTypes.TEXT
        },
        prix: {
            type: DataTypes.DOUBLE
        },
        Stock: {
            type: DataTypes.INTEGER
        },
        descriptionComplete: {
            type: DataTypes.TEXT
        },
        imageProduit: {
            type: DataTypes.BLOB('long')
        },
        categorie: {
            type: DataTypes.STRING
        }
    },{
        timestamps: false
      })
    return produits
}