const db = require('../models')

//Create main model
const contenuCommande = db.contenuCommandes

const getContenuCommandes = async (req, res) => {
    const contenuCommandes = await contenuCommande.findAll()
    res.status(200).send(contenuCommandes)
}

module.exports = {
    getContenuCommandes
}