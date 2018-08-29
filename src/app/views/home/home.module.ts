import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { GnyFormComponent } from './components/gny-form/gny-form.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GnyFormComponent]
})
export class HomeModule { }
