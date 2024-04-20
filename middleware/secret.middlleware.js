function secretMiddleware(req, res, next) {
  if (req.headers.secret === "sikret-key") next();
  else res.status(401).send("Access Denied!");
}
module.exports = secretMiddleware;
