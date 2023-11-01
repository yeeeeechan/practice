const express = require("express");
const router = express.Router();
const controller = require("../controller/cvisitor");

// ~~~~~~:8800에 index.ejs render
router.get("/", controller.home);

// ~~~~~~:8800에 visitor.ejs render
router.get("/visitors", controller.visitor);

// addData
router.post("/visitors", controller.add);

module.exports = router;
