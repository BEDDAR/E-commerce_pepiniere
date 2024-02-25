const contenuCommandeController = require('../controllers/contenuCommandeController.js')

const router = require('express').Router()

router.get('/contenucommandes', contenuCommandeController.getContenuCommandes)


module.exports = router