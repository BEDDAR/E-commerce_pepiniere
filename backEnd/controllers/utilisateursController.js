const db = require('../models')
const logger = require('../traces/logger')
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
        const utilisateur = await utilisateurs.findOne({ where: { email: infoClient.email } })
        //Vérification si l'utilisateur existe déjà (l'unicité de l'email)
        if (utilisateur !== null) {
            return res.status(409).json({ message: `L'utilisateur avec l'email : ${infoClient.email} existe déjà!` })
        }
        //Hashage de mot de passe utilisateur
        const hash = await bcrypt.hash(infoClient.password.toString(), salt);

        const client = {
            nom: infoClient.last_name,
            prenom: infoClient.first_name,
            pseudo: infoClient.pseudo,
            type_de_compte: infoClient.typeDeCompte,
            email: infoClient.email,
            telephone: infoClient.phone,
            mot_de_passe: hash
        };
        console.log(client)
        //Création de l'utilisateur 
        await utilisateurs.create(client);
        return res.status(201).json({ Status: "Success" });
    } catch (err) {
        return res.status(500).json({ message: "Erreur lors de l'ajout de l'utilisateur", Error: err });
    }
}

// Définition d'une fonction asynchrone nommée getUser pour récupérer un utilisateur
const getUser = async (req, res) => {
    // Recherche de l'utilisateur dans la base de données en fonction de l'email fourni dans le corps de la requête
    const utilisateur = await utilisateurs.findAll({
        where: { email: req.body.email }
    });

    // Vérification si l'utilisateur existe dans la base de données
    if (utilisateur.length > 0) {
        // Vérification du mot de passe en utilisant bcrypt.compare()
        bcrypt.compare(req.body.password.toString(), utilisateur[0].mot_de_passe, (err, response) => {
            // Gestion des erreurs potentielles lors de la comparaison de mots de passe
            if (err) { 
                return res.json({ Error: 'erreur de comparaison de mot de passe' });
            }
            // Si la comparaison réussit (response est true), génération d'un token JWT
            if (response) {
                // Récupération des informations de l'utilisateur pour inclure dans le token
                const pseudo = utilisateur[0].pseudo;
                const id = utilisateur[0].id;
                const typeDeCompte = utilisateur[0].type_de_compte;
                // Génération du token JWT en utilisant jwt.sign() à partir des données fournies
                const token = jwt.sign({ id, pseudo, typeDeCompte }, "jwt-secret-key", { expiresIn: '1d' });
                // Définition du token dans un cookie HTTP
                res.cookie('token', token);
                // Envoi d'une réponse JSON avec le statut de succès
                return res.json({ Status: 'Success' });
            } else {
                // Si la comparaison échoue, renvoi d'une erreur indiquant un mot de passe incorrect
                return res.json({ Error: 'Mot de passe incorrect' });
            }
        });
    } else {
        // Si aucun utilisateur correspondant n'est trouvé, renvoi d'une erreur indiquant que l'email n'existe pas
        return res.json({ Error: 'Email non existant' });
    }
};

const verifyUser = (req, res) => {
    logger.info(`User ${req.pseudo} logged in at ${new Date().toISOString()}`);
    return res.json({ Status: "Success", id: req.id, pseudo: req.pseudo, role: req.typeDeCompte })
}

module.exports = {
    getAllUsers,
    addUser,
    getUser,
    verifyUser
}