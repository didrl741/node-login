const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <h1>여기는 루트입니다</h1>
    </body>
    
    </html>`
    );
});

app.get("/login", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <form class="logIn">
            <input type="text" placeholder="아이디"><br>
            <input type="password" placeholder="비밀번호"><br>
            <button>로그인</button>
        </form>
    
    </body>
    
    </html>`
    );
})

app.listen(3001, function () {
    console.log("server run!");
})