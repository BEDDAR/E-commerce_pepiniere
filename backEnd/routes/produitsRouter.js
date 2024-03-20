const produitController = require('../controllers/produitsController.js')

const router = require('express').Router()

router.get('/allProduits', produitController.getAllProducts)
router.get('/allTulipes', produitController.getAllTulipes)
router.get('/allRosiers', produitController.getAllRosiers)
router.get('/allFruits', produitController.getAllFruits)
router.get('/potager', produitController.getPotager)
router.get('/materiel', produitController.getMateriel)
router.get('/soins', produitController.getSoins)
router.patch('/updatestock', produitController.updateStock)
router.post('/ajoutproduit', produitController.ajoutProduit)

module.exports = router