var mysql = require("mysql");

var connection;

if (JAWSDB_URL) {
    connection = mysql.createConnection(JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "burgers_db"
    });
};

connection.connect();
module.exports = connection;