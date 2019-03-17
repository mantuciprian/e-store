import * as express from 'express';
import * as pool from '../../DB/connector/connector';

class CategoriesController {
    router: any
    pool: any;
    _checkIfCategoryNameExists: any;
    _addCategroy: any;
    _sendTheNewCategory: any;
    constructor() {
      this.router = express.Router();
      this.pool = pool;

      this._checkIfCategoryNameExists = (categoryName: string, res: any) => {
        const sender = res;
        this.pool.query(`
        SELECT category_name FROM categories 
        WHERE category_name = '${categoryName}'`, (err, res) => {
          if(err) {
            console.log(err);
            sender.sendStatus(500);
          } else {
            res.rows.length ? sender.sendStatus(500) : this._addCategroy(categoryName, sender);
          }
        });
      }

      this._addCategroy = (categoryName: string, res: any) => {
        const sender = res;
        this.pool.query(`INSERT INTO categories(category_name) VALUES($1)`, 
        [categoryName], (err, res) => {
          if(err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            this._sendTheNewCategory(categoryName, sender);
          }
        });
      }

      this._sendTheNewCategory = (categoryName, res) => {
        const sender = res;
        this.pool.query(`
        SELECT * FROM categories 
        WHERE category_name = '${categoryName}'`, (err, res) => {
          if(err) {
            console.log(err);
            sender.sendStatus(500);
          } else {
            sender.send(res.rows[0]);
          }
        });
      
      }

      this.router.post('/add-category', (req, res) => {
        const { category_name } = req.body;
        this._checkIfCategoryNameExists(category_name, res);
      });

      this.router.get('/get-categories', (req, res) => {
        const sender = res;
        this.pool.query('SELECT * FROM categories', (err, res) => {
          if(err) {
            console.log(err);
            sender.sendStatus(500);
          } else {
            sender.send(res.rows);
          }
        });
      });

      this.router.post('/edit', (req, res) => {
        const sender = res;
        const category = req.body;
        this.pool.query(`
          UPDATE categories SET category_name = '${category.category_name}'
          WHERE id = '${category.id}'`, 
          (err, res) => {
           if(err) {
             console.log(err);
             sender.sendStatus(500);
           } else {
             sender.sendStatus(200);
           }
        });
      });

      this.router.post('/delete', (req, res) => {
        const sender = res;
        const { categoryId } = req.body;
        this.pool.query(`
          DELETE FROM categories
          WHERE id = '${categoryId}'`, 
          (err, res) => {
           if(err) {
             console.log(err);
             sender.sendStatus(500);
           } else {
             sender.sendStatus(200);
           }
        });
      });
    }
}

const CategoriesControllerRoute = new CategoriesController();

module.exports = CategoriesControllerRoute.router;