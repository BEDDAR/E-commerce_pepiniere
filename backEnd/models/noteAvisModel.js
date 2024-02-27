module.exports = (sequelize, DataTypes) => {

    const noteAvis = sequelize.define("note_avis", {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        note: {
            type: DataTypes.DOUBLE
        },
        avis: {
            type: DataTypes.TEXT
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
    return noteAvis
}