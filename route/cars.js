var express = require('express')
var router = express.Router();

router.get("/cars", function (req, res, next) {
    res.json([{
        name: "audi"
    }, {
        name: "BMW"
    }])
})

module.exports = router