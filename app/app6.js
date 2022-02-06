// app.listen() 모듈화 (분리)
// bin 폴더 내의 www.js로 분리했다.

const express = require("express");
const app = express();


const home = require("./src/routes/home2");


app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home);

// www.js에서 쓸수 있도록 export
module.exports = app;