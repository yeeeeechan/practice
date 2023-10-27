const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;
