// Importation du module jsonwebtoken pour la gestion des tokens JWT
const jwt = require('jsonwebtoken');

// Définition d'une fonction middleware nommée verifyUser pour vérifier l'authenticité d'un utilisateur
const verifyUser = (req, res, next) => {
    // Récupération du token JWT depuis les cookies de la requête
    const token = req.cookies.token;

    // Vérification si le token existe
    if (!token) {
        // Si le token n'existe pas, renvoi d'une erreur indiquant que l'utilisateur n'est pas authentifié
        return res.json({ Error: "vous n'êtes pas authentifiée" });
    } else {
        // Si le token existe, vérification de sa validité en utilisant jwt.verify()
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            // Gestion des erreurs potentielles lors de la vérification du token
            if (err) {
                // Si le token n'est pas valide, renvoi d'une erreur indiquant que le token n'est pas correct
                return res.json({ Error: "Token non correct" });
            } else {
                // Si le token est valide, extraction des informations de l'utilisateur à partir du token décodé
                req.pseudo = decoded.pseudo;           // Stockage du pseudo de l'utilisateur dans la requête
                req.id = decoded.id;                   // Stockage de l'identifiant de l'utilisateur dans la requête
                req.typeDeCompte = decoded.typeDeCompte; // Stockage du type de compte de l'utilisateur dans la requête
                next(); // Appel de la fonction middleware suivante
            }
        });
    }
};

// Exportation de la fonction verifyUser pour pouvoir l'utiliser dans d'autres parties de l'application
module.exports = {verifyUser};