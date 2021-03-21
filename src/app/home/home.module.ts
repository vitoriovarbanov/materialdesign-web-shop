import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopViewComponent } from './top-view/top-view.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HomeView2Component } from './home-view2/home-view2.component';
import { HomeView3Component } from './home-view3/home-view3.component';


@NgModule({
  declarations: [TopViewComponent, HomeView2Component, HomeView3Component],
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
