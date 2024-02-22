const { info } = require('sass')
const db = require('../models')

//Create main model
const utilisateurs = db.utilisateurs

//Main work

//Récupérer tous les utilisateurs

const getAllUsers = async (req, res) => {

    let Utilisateurs = await utilisateurs.findAll()

    res.status(200).send(Utilisateurs)
}

const addUser = async (req, res) => {

    const infoClient = req.body
    let client = {
        nom: infoClient.last_name,
        prenom: infoClient.first_name,
        type_de_Compte:infoClient.typeDeCompte,
        email: infoClient.email,
        telephone: infoClient.phone,
        mot_de_passe: infoClient.password
    }

    let utilisateur =await utilisateurs.create(client)


    res.status(200).send(utilisateur)
}

module.exports = {
    getAllUsers,
    addUser
}