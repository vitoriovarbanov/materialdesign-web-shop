import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopViewComponent } from './top-view/top-view.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [TopViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    TopViewComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
