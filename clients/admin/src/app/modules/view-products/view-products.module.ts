import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ViewProductsRoutingModule } from './view-products-routing.module';
import { ProductsLayerComponent } from './components/products-layer/products-layer.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SearchPipe } from './filters/search/search.pipe';
import { CategoryNamePipe } from './filters/category/category-name/category-name.pipe';
import { SearchService } from './services/component-services/search/search.service';
import { ProductsServicesService } from './services/server-calls/products-services/products-services.service';


@NgModule({
  declarations: [ProductsLayerComponent, FilterPanelComponent, ProductsListComponent, SearchPipe, CategoryNamePipe],
  imports: [
    CommonModule,
    ViewProductsRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    ProductsServicesService
  ]
})
export class ViewProductsModule { }
