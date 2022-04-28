const mongoose = require("mongoose");
const accountsSchema = require("./Accounts")

const enterpriseSchema = new mongoose.Schema({
  nameEnterprise: {
    type: String,
    required: true,
  },
  accounts: [accountsSchema]
})

const enterprise = mongoose.model("enterprises", enterpriseSchema)
module.exports = enterprise;