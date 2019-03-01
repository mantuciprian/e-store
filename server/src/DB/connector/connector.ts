import {Pool} from 'pg';
//connect to the DB
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'e-store',
    password: '12345',
    port: 5432,
});


module.exports = pool;