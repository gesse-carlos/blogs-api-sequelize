const jwt = require('../utils/jwt');

const login = (email) => {
  const token = jwt.sign({ email });
  return token;
};

module.exports = { login };