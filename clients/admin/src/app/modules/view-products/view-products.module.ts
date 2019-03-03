import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ViewProductsRoutingModule } from './view-products-routing.module';
import { ProductsLayerComponent } from './components/products-layer/products-layer.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SearchPipe } from './filters/search/search.pipe';
import { SearchService } from './services/component-services/search/search.service';

@NgModule({
  declarations: [ProductsLayerComponent, FilterPanelComponent, ProductsListComponent, SearchPipe],
  imports: [
    CommonModule,
    ViewProductsRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [SearchService]
})
export class ViewProductsModule { }
