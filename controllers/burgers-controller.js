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
        res.json({
            id: results.insertId,
        });
    });
});

router.put('/api/burgers/:id', function (req, res) {
    burger.insertOne(
        {
            devoured: req.body.devoured,
        },
        {
            id: req.params.id,
        },
        function (results) {
            if (results.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;