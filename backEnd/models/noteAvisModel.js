module.exports = (sequelize, DataTypes) => {

    const noteAvis = sequelize.define("note_avis", {

        note: {
            type: DataTypes.DOUBLE
        },
        avis: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    })
    return noteAvis
}