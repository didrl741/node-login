// 컨트롤러 분리
// routes/home2에 원래는 index 혼자 하던 역할을 home.ctrl.js를 만들어서 컨트롤러를 분리했다.
// 보통 서비스개발할때는 MVC패턴을 많이 이용한다.

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home2");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// 미들 웨어 등록. 루트 경로로 들어오면 home으로 보내줌.
app.use("/", home);

app.listen(3005, function () {
    console.log("server run!");
})