module.exports = (sequelize, DataTypes) => {

    const Commandes = sequelize.define("commandes", {
        id:{
            type:DataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
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
    },{paranoid:true})

    return Commandes
}