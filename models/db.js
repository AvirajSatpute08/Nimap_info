const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Aviraj',
    database: 'machine_test',
    connectionLimit: 10,
});

module.exports = db;
