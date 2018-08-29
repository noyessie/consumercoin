import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HomeRoutingModule } from './home-routing.module';
import { GnyFormComponent } from './components/gny-form/gny-form.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [GnyFormComponent]
})
export class HomeModule { }
