const mongoose = require('mongoose');

const movementsSchema = new mongoose.Schema({
  typeMovement: {
    type: String,
    required: true,
  },
  concept: {
    type: String,
    required: true,
  },
  charge: {
    type: Number,
    required: false,
  },
  deposit: {
    type: Number,
    required: false,
  }
})

const movements = mongoose.model("movements", movementsSchema)
module.exports = movements;