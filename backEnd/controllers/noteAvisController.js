const db = require('../models')

//Create main model
const note_Avis = db.noteAvis

//Main work

//Récupérer toutes les notes et les avis

const getAllNoteAvis = async (req, res) => {

    let allNoteAvis = await note_Avis.findAll()

    res.status(200).send(allNoteAvis)
}

const getNoteAvis = async (req, res) => {

    const idProduit = req.params.id
    let noteAvis = await note_Avis.findAll({
        where: { id_produit: idProduit }
    })

    res.status(200).send(noteAvis)
}

module.exports = {
    getAllNoteAvis,
    getNoteAvis
}