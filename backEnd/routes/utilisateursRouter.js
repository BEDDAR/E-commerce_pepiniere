const utilisateursController = require('../controllers/utilisateursController')
const middleware = require('../middleware/middleware.js')

const router = require('express').Router()

router.get('/allutilisateurs',utilisateursController.getAllUsers)

router.post('/ajoutclient',utilisateursController.addUser)

router.post('/connexion',utilisateursController.getUser)

router.get('/verifyuser',middleware.verifyUser, utilisateursController.verifyUser)

module.exports = router