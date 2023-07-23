const express = require("express");
const router = express.Router();
const main_controller = require("../controllers/main_controller");

router.get("/", main_controller.get_main);

module.exports = router;
