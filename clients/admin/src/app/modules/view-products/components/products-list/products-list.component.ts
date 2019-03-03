import { Component, OnInit, HostBinding  } from '@angular/core';
import { SearchService } from '../../services/component-services/search/search.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class ProductsListComponent implements OnInit {
  constructor() { }
  fakeProducts: any[];
  ngOnInit() {
    this.fakeProducts = [];
    for(let i = 0; i < 40; i++) {
      this.fakeProducts.push(i)
    }
  }
}
