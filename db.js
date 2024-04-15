const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'logDB',
    connectionLimit: 5
});

module.exports.conn = conn;