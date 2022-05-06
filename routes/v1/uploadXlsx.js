const multer = require("multer");
const express = require("express");

const manageFiles = require("../../controller/fileManager");

let router = express.Router();

var storage = multer.memoryStorage();

var upload = multer({
    storage: storage
});

router.post("/upload-xlsx", upload.fields([{name: 'file'}, {name: 'file2'}]), manageFiles);

module.exports = router;