const express = require("express");
const router = express.Router();
const controller = require("../controller/Cjoin");

router.get("/", controller.home);

// 회원가입
router.post("/welcome", controller.join);

// 로그인
router.post("/login", controller.login);

module.exports = router;
