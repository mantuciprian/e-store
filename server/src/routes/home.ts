import * as express from 'express';

class Home {
  router: any;
  constructor(){
    this.router = express.Router();
    this.router.get('/', (req, res) => {
      res.send('home page');
    });
  };
}

const homeRoute = new Home();

module.exports = homeRoute.router;