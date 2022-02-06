
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 루트경로에서는 ctrl의 hello함수를 실행시켜라.
router.get("/", ctrl.hello);

router.get("/login", ctrl.login);


// app4.js는 현재 라우터 파일이 어딨는지 모른다.
// 따라서 아래와 같이 외부로 뿌려주는게 필요.
module.exports = router;