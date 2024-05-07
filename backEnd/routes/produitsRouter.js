const produitController = require('../controllers/produitsController.js')
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = require('express').Router()

router.get('/allProduits', produitController.getAllProducts)
router.get('/allTulipes', produitController.getAllTulipes)
router.get('/allRosiers', produitController.getAllRosiers)
router.get('/allFruits', produitController.getAllFruits)
router.get('/potager', produitController.getPotager)
router.get('/materiel', produitController.getMateriel)
router.get('/soins', produitController.getSoins)
router.patch('/updatestock', produitController.updateStock)
router.post('/ajoutproduit', upload.single('imageProduit'), produitController.ajoutProduit)

module.exports = router