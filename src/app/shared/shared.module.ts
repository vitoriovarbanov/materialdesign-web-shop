import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [SideBarComponent, SafePipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SharedModule { }
