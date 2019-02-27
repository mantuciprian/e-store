"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Home {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (req, res) => {
            res.send('home page');
        });
    }
    ;
}
const homeRoute = new Home();
module.exports = homeRoute.router;
