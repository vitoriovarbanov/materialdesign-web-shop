import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component';
import { SportsComponent } from './sports/sports.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SortExpansionPanelComponent } from './sort-expansion-panel/sort-expansion-panel.component';
import { SortByPipe } from './sort-by.pipe';
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';
import { CategoriesNavbarComponent } from './categories-navbar/categories-navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ShopHomeComponent, FoodBeveragesComponent, SportsComponent, SafePipe, ShoppingCartComponent, SortExpansionPanelComponent, SortByPipe, DisplayCartItemsComponent, CategoriesNavbarComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class ShopModule { }
