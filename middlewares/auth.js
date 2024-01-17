const jwt = require('jsonwebtoken');

const { NODE_ENV, SECRET_KEY, SECRET_KEY_DEV } = require('../utils/constants');

const Unauthorized = require('../errors/Unauthorized');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  const bearer = 'Bearer ';

  if (!authorization || !authorization.startsWith(bearer)) {
    next(new Unauthorized('Необходима авторизация'));
    return;
  }

  const token = authorization.replace(bearer, '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? SECRET_KEY : SECRET_KEY_DEV);
  } catch (err) {
    next(new Unauthorized('Необходима авторизация'));
    return;
  }

  req.user = payload;

  next();
};
