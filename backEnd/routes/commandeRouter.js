const commandesController = require('../controllers/commandeController.js')

const router = require('express').Router()

router.get('/allcommandes', commandesController.getAllCommandes)


module.exports = router