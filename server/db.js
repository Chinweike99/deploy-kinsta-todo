const pg = require('pg');
require('dotenv').config();

const db = new pg.Client({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: 'todoapp',
    port: process.env.DBPORT
});
db.connect()

module.exports = db;