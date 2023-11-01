const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.home);

router.get("/welcome", controller.main);

router.post("/join", controller.join);

router.post("/login", controller.login);

router.post("/search", controller.search);

router.patch("/search", controller.edit);

module.exports = router;
