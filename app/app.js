
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const home = require("./src/routes/home");


app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

// www.js에서 쓸수 있도록 export
module.exports = app;