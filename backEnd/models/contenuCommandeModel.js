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
        date: {
            type: DataTypes.DATE,
            get() {
                return (this.getDataValue('date')).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })
            },
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false
    })

    return contenuCommandes
}