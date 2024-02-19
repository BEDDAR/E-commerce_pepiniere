const produitController = require('../controllers/produitsController.js')

const router = require('express').Router()

router.get('/allProduits', produitController.getAllProducts)

module.exports = router