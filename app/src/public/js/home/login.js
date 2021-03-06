"use strict"

const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req),
    });
};