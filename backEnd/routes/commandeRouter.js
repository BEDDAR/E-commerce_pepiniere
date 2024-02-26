const commandesController = require('../controllers/commandeController.js')

const router = require('express').Router()

router.post('/validercommandes', commandesController.createCommande)

router.get('/mescommandes/:idUser', commandesController.getAllCommandesForUser)


module.exports = router