"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
//connect to the DB
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'e-store',
    password: '12345',
    port: 5432,
});
module.exports = pool;
