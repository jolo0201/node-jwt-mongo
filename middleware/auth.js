const jwt = require("jsonwebtoken");
const config = process.env;

//Middleware for token verification
const verifyToken = (req, res, next) => {
  //accept token from body,quert,params,headers
  const token =
    req.body.token ||
    req.query.token ||
    req.params.token ||
    req.headers["authorization"].split(" ")[1] ||
    req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .send("A valid token is required for authentication.");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
