const mongoose = require('mongoose');

const movementsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  concept: {
    type: String,
    required: false,
  },
  charge: {
    type: Number,
    required: false,
  },
  deposit: {
    type: Number,
    required: false,
  },
})

module.exports = movementsSchema;