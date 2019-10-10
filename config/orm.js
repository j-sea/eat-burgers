// Import necessary project files
var connection = require('./connection');

// Set up an ORM object to be used by other files
var orm = {
    selectAll: function (tableName, callback) {
        // Create our SELECT query to return all rows in the given table
        connection.query(
            'SELECT * FROM ??',
            [tableName],
            function (err, res) {
                if (err) throw err;

                // Return all the found rows
                callback(res);
            }
        );
    },
    insertOne: function (tableName, insertObject, callback) {
        // Create our INSERT query to insert a new row into the given table
        connection.query(
            'INSERT INTO ?? SET ?',
            [
                tableName,
                insertObject,
            ],
            function (err, res) {
                if (err) throw err;

                // Call the callback function including results
                callback(res);
            }
        );
    },
    updateOne: function (tableName, updateObject, whereObject, callback) {
        // Create our UPDATE query to update a specified row in the given table
        connection.query(
            'UPDATE ?? SET ? WHERE ?',
            [
                tableName,
                updateObject,
                whereObject,
            ],
            function (err, res) {
                if (err) throw err;

                // Call the callback function including results
                callback(res);
            }
        );
    },
};

// Export the orm file
module.exports = orm;