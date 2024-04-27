const produitController = require('../controllers/produitsController.js')
const multer  = require('multer');

// Configuration de Multer pour gérer les fichiers téléchargés
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // Limite de taille maximale de 5 Mo
    },
  }); // Stocke l'image en mémoire

const router = require('express').Router()

router.get('/allProduits', produitController.getAllProducts)
router.get('/allTulipes', produitController.getAllTulipes)
router.get('/allRosiers', produitController.getAllRosiers)
router.get('/allFruits', produitController.getAllFruits)
router.get('/potager', produitController.getPotager)
router.get('/materiel', produitController.getMateriel)
router.get('/soins', produitController.getSoins)
router.patch('/updatestock', produitController.updateStock)
router.post('/ajoutproduit',upload.single('imageProduit'), produitController.ajoutProduit)

module.exports = router