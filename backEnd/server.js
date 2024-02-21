const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; 


//Middleware

app.use(bodyParser.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))
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