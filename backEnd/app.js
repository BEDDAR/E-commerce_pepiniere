const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();

// Masquer l'en-tête "X-Powered-By"
app.disable('x-powered-by');

//Middleware

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser())
//Routers

const routerProduits=require('./routes/produitsRouter.js')
app.use('/',routerProduits)

const routerNoteAvis=require('./routes/noteAvisRouter.js')
app.use('/',routerNoteAvis)

const routerUtilisateurs=require('./routes/utilisateursRouter.js')
app.use('/',routerUtilisateurs)

const routerCommandes=require('./routes/commandeRouter.js')
app.use('/',routerCommandes)

const routerContenuCommandes=require('./routes/contenuCommandeRouter.js')
app.use('/',routerContenuCommandes)

app.get('/',(req,res)=>{
    res.json('{"message":"Hello"}')
})

module.exports=app;