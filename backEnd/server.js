const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000; 


//Middleware

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
//Routers

const routerProduits=require('./routes/produitsRouter.js')
app.use('/',routerProduits)

const routerNoteAvis=require('./routes/noteAvisRouter.js')
app.use('/',routerNoteAvis)

const routerUtilisateurs=require('./routes/utilisateursRouter.js')
app.use('/',routerUtilisateurs)

app.get('/',(req,res)=>{
    res.json('{"message":"Hello"}')
})

app.listen(port, () => console.log(`Server started on port ${port}`))