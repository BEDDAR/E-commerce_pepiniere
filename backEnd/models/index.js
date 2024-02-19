const dbConfig = require('../config/dbConfig.js')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected...')
    })
    .catch(err => {
        console.log('error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.produits = require('./produitsModel.js')(sequelize, DataTypes)
db.note_avis = require('./noteAvisModel.js')(sequelize, DataTypes)
db.utilisateurs = require('./utilisateursModel.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes resync done')
    })

module.exports = db