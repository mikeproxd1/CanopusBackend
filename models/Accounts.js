const mongoose = require("mongoose");
const movementsSchema = require("./Movements")

const accountsSchema = new mongoose.Schema({
  nameAccount: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  initialBalance: {
    type: Number,
    required: false,
  },
  code: {
    type: String,
    required: false,
  },
  movements: [movementsSchema]
})

module.exports = accountsSchema;