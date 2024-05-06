const produitController = require('../controllers/produitsController.js')
const multer = require('multer');

// Configuration de Multer pour gérer les fichiers téléchargés
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de taille maximale de fichier de 5 Mo
    // Limite de taille totale des données en mémoire
    // Assurez-vous que cette limite est sécuritaire par rapport à la capacité de votre serveur
    // Par exemple, si vous avez 1 Go de mémoire disponible, vous pourriez définir la limite à 100 * 1024 * 1024 (100 Mo)
    // Pour une sécurité accrue, vous pouvez définir une limite encore plus basse.
    contentLength: 100 * 1024 * 1024, // Limite de taille totale des données en mémoire (100 Mo)
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