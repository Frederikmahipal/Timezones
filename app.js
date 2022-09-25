//server setup
const express = require("express");
const { join } = require("path");
const fs = require('fs');
const app = express();

app.use(express.static("static"));

const indexPage = fs.readFileSync('./static/index.html', "utf-8");

app.get("/", (request, response) => {
    response.sendFile(indexPage);
});

app.listen(8080, () => {
    console.log("10100")
});

