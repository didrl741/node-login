const express = require("express");
const app = express();

// 앱 세팅. views 파일들을 views폴더에 넣어놓겠다.
app.set("views", "./views");
// view 엔진으로 ejs를 사용할거다. (npm install ejs -s 필요)
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home/index");
});

app.get("/login", (req, res) => {
    res.render("home/login");
})

app.listen(3003, function () {
    console.log("server run!");
})