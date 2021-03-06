import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ViewProductsModule } from './modules/view-products/view-products.module';
import { AddProductsModule } from './modules/add-products/add-products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ViewProductsModule,
    AddProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
