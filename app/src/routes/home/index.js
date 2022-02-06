
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home/index");
});

router.get("/login", (req, res) => {
    res.render("home/login");
});

// app4.js는 현재 라우터 파일이 어딨는지 모른다.
// 따라서 아래와 같이 외부로 뿌려주는게 필요.
module.exports = router;