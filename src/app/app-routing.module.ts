import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalLayoutComponent } from "./layout/";

const routes: Routes = [
  {
    path: '',
    component: NormalLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: './views/home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
