"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const pool = require("../../DB/connector/connector");
class CategoriesController {
    constructor() {
        this.router = express.Router();
        this.pool = pool;
        this.router.get('/', (req, res) => {
            res.send('categories controller are working');
        });
        this.router.get('/get-categories', (req, res) => {
            const sender = res;
            this.pool.query('SELECT * FROM categories', (err, res) => {
                if (err) {
                    console.log(err);
                    sender.sendStatus(500);
                }
                else {
                    sender.send(res.rows);
                }
            });
        });
    }
}
const CategoriesControllerRoute = new CategoriesController();
module.exports = CategoriesControllerRoute.router;
