module.exports = (sequelize, DataTypes) => {

    const noteAvis = sequelize.define("note_avis", {

        id_client : {
            type: DataTypes.INTEGER
        },
        id_produit : {
            type: DataTypes.INTEGER,
            references: {
                model: 'produits',
                key: 'id'
            }
        },
        note: {
            type: DataTypes.DOUBLE
        },
        avis: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.DATE
        }
    },{
        timestamps: false
      })
    return noteAvis
}