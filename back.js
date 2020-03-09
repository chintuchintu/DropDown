var express = require('express');
var router = express.Router();
var names = [
    {
        Name: "Dinesh", Empid: "5064061", Project: "HomeDepot"
    },
    {
        Name: "Ashik", Empid: "5064062", Project: "HomeDepot"
    },
    {
        Name: "Akil", Empid: "5064063", Project: "HomeDepot"
    }
]
router.get('/', function (req, res,next) {
    res.send("It is working fine").status(200);
});
router.post('/backend', function (req, res) {
    // console.log("Response received",r);
    var name1 = req.body.command;
    console.log("The request received is",req);
    switch (name1) {
        case "Dinesh":
            res.status(200).json(
                {
                    Value: names[0]
                }
            );
        case "Ashik":
            res.status(200).json(
                {
                    Value: names[1]
                }
            );
        case "Akil":
            res.status(200).json(
                {
                    Value: names[2]
                });
        case "default":
            res.status(200).json(
                {
                    Value: "Select any of the value"
                }
            );
    }
})
    module.exports = router;
