const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "credenziali mancanti" });
  try {
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "credenziali errate" });
      }

      next();
    });
  } catch (error) {
    console.log(err);
  }
}

module.exports = authenticateToken;
