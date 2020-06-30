var express = require("express");
var app = express();
var carsRouter = require("./route/cars")
var tokenCheck = require("./middleWare");


app.use(tokenCheck);

app.use("/", carsRouter)

app.listen(8080, function () {
    console.log("Running 8080 port")
})