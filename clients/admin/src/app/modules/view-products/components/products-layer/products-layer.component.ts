import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-products-layer',
  templateUrl: './products-layer.component.html',
  styleUrls: ['./products-layer.component.scss'],
  animations: [
    // trigger('toYellow', [
    //   state('yellow', style({
    //     'backgroundColor' : 'yellow'
    //   })),
    //   transition('black <=> yellow', [
    //     animate('2s')
    //   ]),
    // ]),
    trigger('slider', [
      state('slide-right', style({

      })),
      state('slide-left', style({
        'width': '300px'
      })),
      transition('slide-right <=> slide-left', [
        style({
          'opacity': '0.8',
        }),
        animate('0.5s')
      ])
    ])
  ]})
export class ProductsLayerComponent implements OnInit {
  slide: boolean;
  constructor() { }
  ngOnInit() {
    this.slide = false;
  }
  slideMenu() {
    this.slide = !this.slide;
  }

}
