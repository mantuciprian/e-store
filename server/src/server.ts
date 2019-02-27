import * as express from 'express';
import * as bodyParser from 'body-parser'

//routes
import * as home from './routes/home';

const app = express();
class App {
    app: any;
    port: number;
    constructor(){
      this.app = express();
      this.port = 3000;
      this.app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*'); // '*' for all websites or specified eg:'http://localhost:4200'

        res.setHeader('Access-Control-Request-Headers', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Authorization', 'X-Requested-With, Content-Type', 'Origin','Accept');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
      });

      this.app.use(
        bodyParser.raw({ type : 'application/x-www-form-urlencoded' }),
         (req, res, next) => {
          try {
            req.body = JSON.parse(req.body)
          } catch(e) {
            req.body = require('qs').parse(req.body.toString());
          }
          next();
        }
       );
       this.app.use(express.urlencoded({ extended: false }));
       this.app.use(bodyParser.json())
         this.app.use('/home', home);
         //routes
         this.app.get('/', (req, res) => {
           res.send('node js with ts is nice');
         });
       };

    startServer(){
      this.app.listen(this.port, () => {
        console.log(`Server started on port ${this.port}`);
      });
    }
}

const server = new App();

server.startServer();