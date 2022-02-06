const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) => {
    res.send("여기는 로그인화면 입니다.");
})

app.listen(3000, function () {
    console.log("server run!");
})

// terminal에서 node app.js 하면 서버가 실행됨.
// localhost:3000 으로 접속해보자.
// ctrl c 하면 서버 종료.


// http로 구현 (구버전)

// const http = require("http");       // 내장모듈. npm에서 다운로드 안해도됨.
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     if (req.url === "/") {
//         res.end("여기는 루트");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// })

// http를 이용한 서버의 단점 : 한글처리를 따로 해줘야 함,
// express의 문법이 더 간단. http는 if, else 등등 써줘야 함.