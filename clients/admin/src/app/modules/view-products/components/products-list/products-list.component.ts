import { Component, OnInit, HostBinding  } from '@angular/core';
import { SearchService } from '../../services/component-services/search/search.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ProductsServicesService } from '../../services/server-calls/products-services/products-services.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class ProductsListComponent implements OnInit {
  fakeProducts: any[];
  products: any;
  categories: any;
  constructor(private productsServices: ProductsServicesService) { }

  ngOnInit() {
    this.fakeProducts = [];
    this.productsServices.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
    this.productsServices.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
