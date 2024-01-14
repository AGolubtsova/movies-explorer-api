const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (correct) => isURL(correct),
      message: 'Ошибка при передаче постера фильма',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (correct) => isURL(correct),
      message: 'Ошибка при передаче трейлера фильма',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (correct) => isURL(correct),
      message: 'Ошибка при передаче миниатюрного изображения к постеру фильма',
    },
  },
  owner: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
