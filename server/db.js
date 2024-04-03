const Pool = require('pg').Pool;
require('dotenv').config();

// const { HOST, PASSWORD, USER, PORT, DATABASE } = process.env

// const pool = new Pool({
//     USER,
//     PASSWORD,
//     HOST,
//     PORT,
//     DATABASE,
// }, console.log(USER, PASSWORD, HOST, PORT, DATABASE));

const pool = new Pool({
    user: 'postgres',
    password: 'ventana1',
    host: 'localhost',
    port: 5433,
    database: 'todo_database',
});


module.exports = pool;