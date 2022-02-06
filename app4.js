// 라우팅 관리

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// 미들 웨어 등록. 루트 경로로 들어오면 home으로 보내줌.
app.use("/", home);

app.listen(3003, function () {
    console.log("server run!");
})