import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopViewComponent } from './home/top-view/top-view.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', pathMatch: 'full',component: TopViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
