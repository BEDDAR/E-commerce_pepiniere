const utilisateursController = require('../controllers/utilisateursController')

const router = require('express').Router()

router.get('/allutilisateurs',utilisateursController.getAllUsers)

router.post('/ajoutClient',utilisateursController.addUser)

module.exports = router