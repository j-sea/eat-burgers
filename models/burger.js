var orm = require('../config/orm');

var burger = {
    selectAll: function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res);
        });
    },
    insertOne: function (insertObject, callback) {
        orm.insertOne('burgers', insertObject, function (res) {
            callback(res);
        });
    },
    updateOne: function (updateObject, whereObject, callback) {
        orm.updateOne('burgers', updateObject, whereObject, function (res) {
            callback(res);
        })
    },
};

module.exports = burger;