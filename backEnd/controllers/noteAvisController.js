const db =require('../models')

//Create main model
const noteAvis=db.note_avis

//Main work

//Récupérer toutes les notes et les avis

const getAllNoteAvis = async(req,res)=>{

    let allNoteAvis = await noteAvis.findAll()

    res.status(200).send(allNoteAvis)
}

module.exports={
    getAllNoteAvis
}