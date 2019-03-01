import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsLayerComponent } from './components/products-layer/products-layer.component';

const routes: Routes = [{path: 'view-products', component:ProductsLayerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProductsRoutingModule { }
