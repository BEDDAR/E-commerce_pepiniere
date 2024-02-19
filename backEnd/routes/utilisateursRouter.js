const utilisateursController = require('../controllers/utilisateursController')

const router = require('express').Router()

router.get('/allutilisateurs',utilisateursController.getAllUsers)

module.exports = router