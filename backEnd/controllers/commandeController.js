const db = require('../models')

//Create main model
const Commandes = db.commandes
const Produits = db.Produits

const createCommande = async (req, res) => {
    let commandes = await Commandes.create({ id_client: req.body.idClient })
    console.log(req.body)
    for (const item of req.body.Produits) {
        console.log( item.produit.id)
        let Produit = await Produits.findOne({
            where: {
                id: item.produit.id
            }
        })

        const commandeItem = {
            prix: item.produit.prix,
            quantite: item.quantity,
            total: item.total
        }


        await commandes.addProduit(Produit, { through: commandeItem });
    }
    res.status(200).send(commandes)
}

const getAllCommandesForUser = async (req, res) => {

    const idUser = req.params.idUser

    const commandes = await Commandes.findAll({
        where: {
            id_client: idUser
        },
        include: Produits
    })
    res.status(200).send(commandes)
}

module.exports = {
    createCommande,
    getAllCommandesForUser
}