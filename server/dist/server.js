"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
class App {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.app.get('/', (req, res) => {
            res.send('node js with ts is nice');
        });
    }
    ;
    startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}
const server = new App();
server.startServer();
