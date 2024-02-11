const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')
const app = express();

//Middleware

app.use(bodyParser.json());
app.use(cors())

const port = 3000;

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'projet'
});

//Récupérer tous les produits Tulipes
app.get('/allProduits', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits`',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Récupérer tous les produits Tulipes
app.get('/allTulipes', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits` where categorie = "Tulipe" ORDER BY id',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Récupérer tous les produits Rosiers
app.get('/allRosiers', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits` where categorie = "Rosier" ORDER BY id',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Récupérer tous les produits Fruit
app.get('/allFruits', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits` where categorie = "Fruit" ORDER BY id',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Récupérer tous les produits Fruit
app.get('/potager', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits` where categorie = "Potager" ORDER BY id',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Récupérer tous les produits Materiel
app.get('/materiel', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits` where categorie = "Materiel" ORDER BY id',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Récupérer tous les produits Soins
app.get('/soins', (req, res) => {
  connection.query(
    'SELECT *,(SELECT AVG(note) FROM `note_avis` WHERE produits.id =note_avis.id_produit ) as note FROM `produits` where categorie = "Soin" ORDER BY id',
    function (err, results, fields) {
      // results contains rows returned by server
      // fields contains extra meta data about results, if available
      res.send(results)
    }
  );
})

//Mise à jour de stock
app.post('/updatestock', (req, res) => {
  const stockInfo = req.body
  const id = stockInfo.id
  const stock = stockInfo.stock

  connection.query(
    'UPDATE `produits` SET `stock`=? WHERE id=?', [stock, id],
    function (error, results, fields) {
      res.json(results)
    }
  );
})

//Récupérer les avis pour un produit donnée
app.get('/getavis/:id', (req, res) => {
  const idProduit = req.params.id

  connection.query(
    'SELECT id,id_client,id_produit,note,avis, DATE_FORMAT(date, "%d/%m/%Y") as date FROM `note_avis` WHERE id_produit=?', [idProduit],
    function (error, results, fields) {
      res.send(results)
      console.log(results)
    }
  );
})

//zAjouter un avis pour un produit donnée
app.post('/addavis', (req, res) => {
  const body = req.body
  const idUser = body.idUser
  const idArticle = body.idArticle
  const note = body.note
  const commentaire = body.commentaire

  connection.query(
    'INSERT INTO `note_avis`(`id_client`, `id_produit`, `note`, `avis`,`date`) VALUES (?,?,?,?,NOW())', [idUser, idArticle, note, commentaire],
    function (error, results, fields) {
      res.send(results)
    }
  );
})

//Ajouter un compte client
app.post('/AjoutClient', (req, res) => {
  const infoClient = req.body
  const nom = infoClient.last_name
  const prenom = infoClient.first_name
  const email = infoClient.email
  const telephone = infoClient.phone
  const motDePasse = infoClient.password

  connection.query(
    'INSERT INTO `enregistrement`(`nom`, `prenom`, `email`, `telephone`, `token`) VALUES (?,?,?,?,?)', [nom, prenom, email, telephone, motDePasse],
    function (error, results, fields) {
      res.json(results)

    }
  );
})

app.get('/connexion/:email', (req, res) => {
  const email = req.params.email
  connection.query(
    'SELECT `id`,`email`,`nom`,`prenom`,`token` FROM `enregistrement` WHERE email = ?', [email],
    function (error, results, fields) {
      //on est bien connecté (OK 200)
      if (results.length !== 0) {
        //let token = jwt.sign({user_id:results[0].id},"cHJvamV0IGZpbiBkJ8OpdHVkZQ==")
        res.status(200).json({ "results": results, isExist: true })
      } else {
        res.json({ massage: "Email invalide", isExist: false })
      }

    }
  );
})

app.post('/validercommandes', (req, res) => {
  const idClient = req.body.idClient
  const idProduit = req.body.idProduit
  const prix = req.body.prix
  const quantite = req.body.quantite
  const total = req.body.total;

  connection.query(
    'INSERT INTO `commandes`(`id_client`, `id_produit`, `prix`, `quantite`, `total`,`date`) VALUES (?,?,?,?,?,NOW())', [idClient, idProduit, prix, quantite, total],
    function (error, results, fields) {

      res.json(error)
    }
  );
});

app.get('/mescommandes/:idUser', (req, res) => {
  const idUser = req.params.idUser
  console.log(idUser)
  connection.query(
    'SELECT commandes.id,commandes.id_client,commandes.id_produit,commandes.prix,commandes.quantite,commandes.total, DATE_FORMAT(commandes.date, "%d/%m/%Y") as date,produits.nom AS nomProduit,produits.imageProduit FROM `commandes` LEFT JOIN `produits` ON produits.id = commandes.id_produit WHERE commandes.id_client = ?', [idUser],
    function (error, results, fields) {
      res.json(results)
    }
  );
})



app.listen(port, () => console.log(`Server started on port ${port}`))