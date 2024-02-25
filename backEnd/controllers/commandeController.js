const db = require('../models')

//Create main model
const Commandes = db.Commandes

const getAllCommandes = async (req, res) => {
    const commandes = await Commandes.findAll()
    res.status(200).send(commandes)
}

module.exports = {
    getAllCommandes
}