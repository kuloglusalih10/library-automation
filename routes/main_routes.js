const express = require("express");
const router = express.Router();
const main_controller = require("../controllers/main_controller");

router.get("/", main_controller.get_main);
router.get("/login",main_controller.get_login);
router.post("/login",main_controller.post_login);
router.get("/register",main_controller.get_register);
router.post("/register",main_controller.post_register);

module.exports = router;