const db = require('../models')
const fs = require('fs');
//Create main model
const Produits = db.Produits

//Main work

//Récupérer tous les produits

const getAllProducts = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll();

    res.status(200).send(produits)
}

//Récupérer tous les produits Tulipes
const getAllTulipes = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll({
        where: { categorie: 'Tulipe' }
    });

    res.status(200).json(produits)
}

//Récupérer tous les produits Rosiers
const getAllRosiers = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll({
        where: { categorie: 'Rosier' }
    });

    res.status(200).json(produits)
}

//Récupérer tous les produits Fruits
const getAllFruits = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll({
        where: { categorie: 'Fruit' }
    });

    res.status(200).json(produits)
}

//Récupérer tous les produits potager
const getPotager = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll({
        where: { categorie: 'Potager' }
    });

    res.status(200).json(produits)
}

//Récupérer tous les produits Materiel
const getMateriel = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll({
        where: { categorie: 'Materiel' }
    });

    res.status(200).json(produits)
}

//Récupérer tous les produits Soins
const getSoins = async (req, res) => {

    let produits = await Produits.scope(['withAverageNote']).findAll({
        where: { categorie: 'Soin' }
    });

    res.status(200).json(produits)
}

//Mise à jour de stock
const updateStock = async (req, res) => {
    const stockInfo = req.body
    const id = stockInfo.id
    const stock = stockInfo.stock
    const produit = await Produits.update({ stock: stock }, {
        where: { id: id }
    })
    res.status(200).send(produit)
}

//Ajout d'un produit
const ajoutProduit = async (req, res) => {
    try {
        console.log(req.file,req.body);
        const imageBuffer = req.file.buffer;

        const nouveauProduit = {
            nom: req.body.nom,
            descriptionCourte: req.body.descriptionCourte,
            prix: req.body.prix,
            stock: req.body.stock,
            descriptionComplete: req.body.descriptionComplete,
            imageProduit: imageBuffer,
            categorie: req.body.categorie,
        };

        const produit = Produits.build(nouveauProduit);
        await produit.save();

        res.status(200).send(produit);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'insertion du produit.');
    }
}

module.exports = {
    getAllProducts,
    getAllTulipes,
    getAllRosiers,
    getAllFruits,
    getPotager,
    getMateriel,
    getSoins,
    updateStock,
    ajoutProduit
}