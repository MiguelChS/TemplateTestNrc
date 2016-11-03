/**
 * Created by Miguel on 3/11/2016.
 */
var express = require("express");
var app = express();
var router = express.Router();
var fs = require("fs");

app.use(express.static(__dirname + '/public'));


app.use(router);

router.get("/turno",function (req,res) {
    res.send("in process :(");
});

router.get("/",function (req,res) {
    res.sendfile("./public/index.html");
});

app.listen(process.env.PORT || 5000);