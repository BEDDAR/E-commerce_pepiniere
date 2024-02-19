const db =require('../models')

//Create main model
const produit=db.produits

//Main work

//Récupérer tous les produits

const getAllProducts = async(req,res)=>{

    let produits = await produit.findAll()

    res.status(200).send(produits)
}

module.exports={
    getAllProducts
}