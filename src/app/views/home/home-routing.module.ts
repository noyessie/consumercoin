import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnyFormComponent } from './components/gny-form/gny-form.component';
import { GnySuccessComponent } from './components/gny-success/gny-success.component';



const routes: Routes = [
  {
    path:'success',
    component: GnySuccessComponent
  },
  {
    path:'**',
    component:GnyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
