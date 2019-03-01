import * as express from 'express';
import * as pool from '../DB/connector/connector';

class Home {
  router: any;
  pool: any;
  constructor(){
    this.router = express.Router();
    this.pool = pool;
    this.router.get('/', (req, res) => {
      res.send('home page');
    });
    this.router.get('/test', (req, res) => {
      const sender = res;
      this.pool.query('SELECT * FROM users',(err, res) => {
        if(err) {
          console.log(err);
          sender.send(500);
          return;
        } else {
          console.log(res.rows);
          sender.send(res.rows);
        }
      });
    });
  };
}

const homeRoute = new Home();

module.exports = homeRoute.router;