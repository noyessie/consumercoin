import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NormalLayoutComponent } from './layout/';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { GnyService } from './shared/services/gny.service';
import { NationalityService } from './shared/services/nationality.service';
import { CountryService } from './shared/services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    NormalLayoutComponent,
    FooterComponent,
    HeaderComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GnyService,
    NationalityService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
