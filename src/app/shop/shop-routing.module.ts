import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component';
import { SportsComponent } from './sports/sports.component';
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsResolver } from '../product-details.resolver';

const routes: Routes = [
  { path: '', component: ShopHomeComponent },
  { path: 'foodbeverages', component: FoodBeveragesComponent },
  { path: 'foodbeverages/:id', component: ProductDetailsComponent,  resolve: { productDetails: ProductDetailsResolver } },
  { path: 'sports', component: SportsComponent },
  { path: 'sports/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver } },
  { path: 'cart', component: DisplayCartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
