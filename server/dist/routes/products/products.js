"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const pool = require("../../DB/connector/connector");
class Products {
    constructor() {
        this.router = express.Router();
        this.pool = pool;
        this.router.get('/', (req, res) => {
            res.send('products page works');
        });
        this.router.get('/products', (req, res) => {
            const sender = res;
            this.pool.query('SELECT * FROM products', (err, res) => {
                if (err) {
                    console.log(err);
                    sender.send(500);
                    return;
                }
                else {
                    sender.send(res.rows);
                }
            });
        });
        this.router.get('/products-categories', (req, res) => {
            const sender = res;
            this.pool.query('SELECT * FROM categories', (err, res) => {
                if (err) {
                    console.log(err);
                    sender.send(500);
                    return;
                }
                else {
                    sender.send(res.rows);
                }
            });
        });
    }
    ;
}
const ProductsRoute = new Products();
module.exports = ProductsRoute.router;
