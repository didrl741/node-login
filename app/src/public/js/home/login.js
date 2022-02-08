"use strict"
// 프론트단 기능 구현.
// 아이디와 비번 입력하고 로그인 버튼 누르면 서버로 전송되게 하자.
// DOM: html의 요소를 JS에서 제어할 수 있게 함.

const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: pw.value,
    };

    console.log(req);
};