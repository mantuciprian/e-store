import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductsRoutingModule } from './add-products-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FilterControllerComponent } from './components/filter-controller/filter-controller.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, FilterControllerComponent],
  imports: [
    CommonModule,
    AddProductsRoutingModule,
    FormsModule
  ]
})
export class AddProductsModule { }
