const noteAvisController = require('../controllers/noteAvisController.js')

const router = require('express').Router()

router.get('/allnoteavis',noteAvisController.getAllNoteAvis)

module.exports = router