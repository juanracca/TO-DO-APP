const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'ventana1',
    host: 'localhost',
    port: 5433,
    database: 'todo_database'
});

module.exports = pool;