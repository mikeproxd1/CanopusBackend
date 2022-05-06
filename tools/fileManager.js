const enterpriseModel = require("../models/Enterprise");

const xlsxToData = require("./xlsxConverter");
const { createAccounts } = require("./accountManager");
const { createMovements } = require("./movementManager");

async function manageFiles(req, res) {
  try {
    let data = [
      xlsxToData(req.files.file[0]), 
      xlsxToData(req.files.file2[0])
    ]
    let nameEnterprise = req.body.nameEnterprise;
    let username = req.body.username;

    let enterprise = await createEnterpriseAccounts(data, nameEnterprise, username);

    await enterprise.save();

    console.log("Success!!");
    return res.status(201).send(enterprise);
  } catch(e) {
    console.log(e);

    return res.status(406).send("Failure");
  }
}

async function createEnterpriseAccounts(data, nameEnterprise, username) {
  let accounts = await createAccounts(data[0]);
  accounts = await createMovements(data[1], accounts);
  const enterprise = new enterpriseModel({nameEnterprise, accounts});

  return enterprise;
}

module.exports = manageFiles;