function secretMiddleware(req, res, next) {
  if (req.headers.secret === process.env.API_SECRET) next();
  else res.status(401).send("Access Denied!");
}
module.exports = secretMiddleware;
