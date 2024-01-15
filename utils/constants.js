// переменные для разработки
const MONGO_URL_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const SECRET_KEY_DEV = 'some-secret-key';

const {
  NODE_ENV,
  SECRET_KEY,
  MONGO_URL,
} = process.env;

module.exports = {
  NODE_ENV,
  SECRET_KEY,
  SECRET_KEY_DEV,
  MONGO_URL,
  MONGO_URL_DEV,
};
