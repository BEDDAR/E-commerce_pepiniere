const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, "cHJvamV0IGZpbiBkJ8OpdHVkZQ==");
        next();
    } catch {
        res.status(401).json({ message: "Token d'authentification invalide" });
    }

}