const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Récupérez le token JWT
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Accès non autorisé, token manquant' });
  }
  jwt.verify(token, '8zchof1O9L', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token invalide' });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
