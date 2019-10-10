// Import necessary Node.js files
var mysql = require('mysql');

// Create the connection configuration to our database
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "burgers_db"
// });
var connection = mysql.createConnection({
    host: "arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "oj6rigopocfgf2tq",
    password: "sdwmu0wxmopdrswg",
    database: "ex117npzzkshmrsq"
});

// Connect to our database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export our connection to whoever is using it
module.exports = connection;
