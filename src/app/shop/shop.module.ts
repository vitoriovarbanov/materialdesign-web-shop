import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component';
import { SportsComponent } from './sports/sports.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [ShopHomeComponent, FoodBeveragesComponent, SportsComponent, SafePipe],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class ShopModule { }
