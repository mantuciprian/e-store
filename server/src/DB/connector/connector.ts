import {Pool} from 'pg';
//connect to the DB
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'e-store',
    password: 'ciprian',
    port: 5432,
});


module.exports = pool;