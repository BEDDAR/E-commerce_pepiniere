const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const salt = 10

//Create main model
const utilisateurs = db.utilisateurs

//Main work

//Récupérer tous les utilisateurs

const getAllUsers = async (req, res) => {

    let Utilisateurs = await utilisateurs.findAll()

    res.status(200).send(Utilisateurs)
}

const addUser = async (req, res) => {
    try {
        const infoClient = req.body;
        const hash = await bcrypt.hash(infoClient.password.toString(), salt);
        const client = {
            nom: infoClient.last_name,
            prenom: infoClient.first_name,
            type_de_Compte: infoClient.typeDeCompte,
            email: infoClient.email,
            telephone: infoClient.phone,
            mot_de_passe: hash
        };
        await utilisateurs.create(client);
        return res.status(200).json({ Status: "Success" });
    } catch (err) {
        return res.status(500).json({ Error: "Erreur lors de l'ajout de l'utilisateur" });
    }
}

const getUser = async (req, res) => {

    const utilisateur = await utilisateurs.findAll({
        where: { email: req.body.email }
    })
    if (utilisateur.length > 0) {
        bcrypt.compare(req.body.password.toString(), utilisateur[0].mot_de_passe, (err, response) => {
            if (err) { return res.json({ Error: 'erreur de comparaison de mot de passe' }) }
            if (response) {
                const name = utilisateur[0].nom
                const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' })
                console.log('token', token)
                res.cookie('token', token)
                return (res.json({ Status: 'Success' }))
            } else {
                return res.json({ Error: 'Mot de passe incorrect' })
            }
        })
    } else {
        return res.json({ Error: 'Email non existant' })
    }
}

const verifyUser = (req, res) => {
    console.log('name',req.name)
    return res.json({ Status: "Success", name: req.name })
}


module.exports = {
    getAllUsers,
    addUser,
    getUser,
    verifyUser
}