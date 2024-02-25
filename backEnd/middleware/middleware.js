const jwt =require('jsonwebtoken')

const verifyUser=(req,res,next)=>{
    const token =req.cookies.token;
    if(!token){
        return res.json({Error:"vous n'êtes pas authentifiée"})
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json({Error:"Token non correct"})
            }else{
                req.name=decoded.name;
                console.log('middleware',req.name)
                next()
            }
        })
    }
}

module.exports={
    verifyUser
}