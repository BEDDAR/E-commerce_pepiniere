const produitController = require('../controllers/produitsController.js')
const multer = require('multer');

// Configuration de Multer

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fieldNameSize: 255,
    fileSize: 5 * 1024 * 1024,
    fieldSize: 5 * 1024 * 1024,
    files: 1,
    fields: 1
  },
  fileFilter: (req, file, cb) => {
    // Validation du type de fichier
    const allowedMimes = ['image/jpeg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Type de fichier non pris en charge'));
    }
  },
});

const router = require('express').Router()

router.get('/allProduits', produitController.getAllProducts)
router.get('/allTulipes', produitController.getAllTulipes)
router.get('/allRosiers', produitController.getAllRosiers)
router.get('/allFruits', produitController.getAllFruits)
router.get('/potager', produitController.getPotager)
router.get('/materiel', produitController.getMateriel)
router.get('/soins', produitController.getSoins)
router.patch('/updatestock', produitController.updateStock)
router.post('/ajoutproduit', upload.single('imageProduit'), produitController.ajoutProduit)

module.exports = router