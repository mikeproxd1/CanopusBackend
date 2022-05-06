const xlsx = require("xlsx");

function xlsxToData(file) {
  let workbook = xlsx.read(file.buffer);
  let sheet_name_list = workbook.SheetNames;
  let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  return data;
}

module.exports = xlsxToData;