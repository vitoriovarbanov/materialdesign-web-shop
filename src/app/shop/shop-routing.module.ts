import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component';
import { SportsComponent } from './sports/sports.component';
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ShopHomeComponent },
  { path: 'foodbvg', component: FoodBeveragesComponent },
  { path: 'foodbvg/:id', component: ProductDetailsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'sports/:id', component: ProductDetailsComponent },
  { path: 'cart', component: DisplayCartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
