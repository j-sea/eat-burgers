var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/', function (req, res) {
    burger.selectAll(function (burgers) {

        var handlebarsData = {
            burgersMenu: [],
            burgersEaten: [],
        }

        burgers.forEach(function (burger) {
            if (!burger.devoured) {
                handlebarsData.burgersMenu.push(burger);
            }
            else {
                handlebarsData.burgersEaten.push(burger);
            }
        });

        res.render('index', handlebarsData);
    });
});

router.post('/api/burgers', function (req, res) {
    burger.insertOne({
        burger_name: req.body.burger,
    },
    function (results) {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', function (req, res) {
    burger.updateOne(
        {
            devoured: (req.body.devoured.toLowerCase() === 'true'),
        },
        {
            id: parseInt(req.params.id),
        },
        function (results) {
            res.json(results);
        }
    );
});

module.exports = router;