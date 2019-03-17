import * as express from 'express';
import * as bodyParser from 'body-parser'

//routes
import * as home from './routes/home';
import * as products from './routes/products/products';
import * as categoriesController from './routes/categories-controller/categories-controller';

const app = express();
class App {
    app: any;
    port: number;
    constructor(){
      this.app = express();
      this.port = 3000;
      this.app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");

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
         this.app.use('/products', products);
         this.app.use('/categories-controller', categoriesController);         
         //routes
         this.app.get('/', (req, res) => {
           res.send('node js with ts is nice');
         });
       };

    startServer(){
      this.app.listen(this.port, '0.0.0.0' ,() => {
        console.log(`Server started on port ${this.port}`);
      });
    }
}

const server = new App();

server.startServer();