//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.send("This Works!");
});

app.use(function (req, res) {
    res.status(404).send("Not Found");
});

app.listen(PORT, function(){
    console.log("Server started in port "+PORT);
});