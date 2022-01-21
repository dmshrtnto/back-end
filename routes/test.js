const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.post("/op_list_user",controller.Test.login);

module.exports = router;