const noteAvisController = require('../controllers/noteAvisController.js')

const router = require('express').Router()

router.get('/allnoteavis',noteAvisController.getAllNoteAvis)

router.get('/getavis/:id',noteAvisController.getNoteAvis)

module.exports = router