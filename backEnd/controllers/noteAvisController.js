const db = require('../models')

//Create main model
const note_Avis = db.noteAvis

//Récupérer toutes les notes et les avis

const getAllNoteAvis = async (req, res) => {

    let allNoteAvis = await note_Avis.findAll()

    res.status(200).send(allNoteAvis)
}

//Récupérer les avis pour un produit donnée
const getNoteAvis = async (req, res) => {

    const idProduit = req.params.id
    let noteAvis = await note_Avis.findAll({
        where: { id_produit: idProduit }
    })

    res.status(200).send(noteAvis)
}

// Définition d'une fonction asynchrone addNoteAvis pour ajouter un avis pour un produit donné
const addNoteAvis = async (req, res) => {
    // Récupération des données de la requête contenues dans req.body
    let body = req.body;

    // Création de l'objet commentaire contenant les informations de l'avis
    let commentaire = {
        note: body.note,             // Note attribuée au produit
        avis: body.commentaire,      // Commentaire laissé par l'utilisateur
        id_client: body.idUser,      // Identifiant de l'utilisateur ayant laissé l'avis
        id_produit: body.idArticle   // Identifiant du produit concerné par l'avis
    };

    // Création de l'avis dans la base de données en utilisant le modèle note_Avis et les données de commentaire
    let noteAvis = await note_Avis.create(commentaire);

    // Envoi d'une réponse avec le statut 200 (OK) et l'avis ajouté
    res.status(200).send(noteAvis);
};

module.exports = {
    getAllNoteAvis,
    getNoteAvis,
    addNoteAvis
}