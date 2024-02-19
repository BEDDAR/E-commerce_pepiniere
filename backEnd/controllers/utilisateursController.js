const db =require('../models')

//Create main model
const utilisateurs=db.utilisateurs

//Main work

//Récupérer tous les utilisateurs

const getAllUsers = async(req,res)=>{

    let Utilisateurs = await utilisateurs.findAll()

    res.status(200).send(Utilisateurs)
}

module.exports={
    getAllUsers
}