import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HomeRoutingModule } from './home-routing.module';
import { GnyFormComponent , RequiredErrorComponent } from './components/gny-form/gny-form.component';
import { GnySuccessComponent } from './components/gny-success/gny-success.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [GnyFormComponent, GnySuccessComponent, RequiredErrorComponent ]
})
export class HomeModule { }
