const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const corsAllow = require('./middlewares/cors');
const router = require('./routes');

const responseHandler = require('./middlewares/response-handler');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const { MONGO_URL } = require('./utils/constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(corsAllow);

app.use(requestLogger); // подключаем логгер запросов

app.use(router);

app.use(errorLogger); // подключаем логгер ошибок

// Обработчик ответов
app.use(errors());
app.use(responseHandler);

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
  });

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});
