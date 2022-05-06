const multer = require("multer");
const xlsx = require("xlsx");
const express = require("express");

const manageFiles = require("../../tools/fileManager");

let router = express.Router();

var storage = multer.memoryStorage();

var upload = multer({
    storage: storage
});

router.post("/uploadXlsx", upload.fields([{name: 'file'}, {name: 'file2'}]), manageFiles);

module.exports = router;