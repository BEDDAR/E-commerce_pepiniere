module.exports = (sequelize, DataTypes) => {

    const Produits = sequelize.define("produits", {

        nom: {
            type: DataTypes.STRING(100)
        },
        descriptionCourte: {
            type: DataTypes.TEXT
        },
        prix: {
            type: DataTypes.DOUBLE
        },
        stock: {
            type: DataTypes.INTEGER
        },
        descriptionComplete: {
            type: DataTypes.TEXT
        },
        imageProduit: {
            type: DataTypes.BLOB('long')
        },
        categorie: {
            type: DataTypes.STRING(50)
        },

    }, {
        timestamps: false
    },{paranoid:true})

    return Produits
}