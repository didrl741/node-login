// app.listen() 모듈화 (분리)
// bin 폴더 내의 www.js로 분리했다.

const express = require("express");
const app = express();


const home = require("./src/routes/home2");


app.set("views", "./src/views");
app.set("view engine", "ejs");

// __dirname: 현재위치 반환.
// src 안에 public이라는 폴더를 정적경로로 추가해주겠다는 의미.
// 이러면 login.ejs에서 /js를 보면 public의 js폴더로 접근하게 됨.
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

// www.js에서 쓸수 있도록 export
module.exports = app;