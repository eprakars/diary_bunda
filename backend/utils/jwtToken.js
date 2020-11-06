const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;
const expiresIn = process.env.EXPIRATION_TIME;

module.exports.createToken = (payload) => {
  const options = {
    algorithm: 'HS256',
    expiresIn
  };
  const generateToken = jwt.sign(payload, SECRET_KEY, options);

  return generateToken;
};

module.exports.decoded = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded
}
