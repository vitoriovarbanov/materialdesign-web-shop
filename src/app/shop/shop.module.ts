import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [ShopHomeComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule
  ]
})
export class ShopModule { }
