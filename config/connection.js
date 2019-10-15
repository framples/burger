let mysql = require("mysql");

let connection;
if (process.env.JASWDB_URL) {
    connection = mysql.createConnection(process.env.JASWDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "Blitzcrank13",
        database: "burgers_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    } console.log("Connected as id " + connection.threadId);
});

module.exports = connection;