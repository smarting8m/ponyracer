import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
