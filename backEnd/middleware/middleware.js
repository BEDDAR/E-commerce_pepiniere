const jwt =require('jsonwebtoken')

const verifyUser=(req,res,next)=>{
    const token =req.cookies.token;
    if(!token){
        return res.json({Error:"vous n'êtes pas authentifiée"})
    }else{
        //Vérifier la validité de token
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json({Error:"Token non correct"})
            }else{
                req.pseudo=decoded.pseudo;
                req.id=decoded.id
                req.typeDeCompte=decoded.typeDeCompte
                console.log('middleware',req.name)
                next()
            }
        })
    }
}

module.exports={
    verifyUser
}