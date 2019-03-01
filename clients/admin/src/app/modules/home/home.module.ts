import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
