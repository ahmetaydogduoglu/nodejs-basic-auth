var express = require('express')
var router = express.Router();
var auth = require("../middleWare")
router.get("/cars", auth, function (req, res, next) {
    res.json([{
        name: "audi"
    }, {
        name: "BMW"
    }])
})

module.exports = router