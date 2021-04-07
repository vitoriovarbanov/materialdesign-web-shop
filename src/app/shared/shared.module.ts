import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safe.pipe';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [SideBarComponent, SafePipe, NotFoundComponent],
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
