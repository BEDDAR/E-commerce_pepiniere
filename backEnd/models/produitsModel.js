module.exports = (sequelize, DataTypes) => {

    const Produits = sequelize.define("produits", {

        nom: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descriptionCourte: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        prix: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descriptionComplete: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imageProduit: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        },
        categorie: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

    }, {
        timestamps: false
    },{paranoid:true})

    return Produits
}