import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { SellModule } from './sell/sell.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//cambiar local de forma global
import localES from '@angular/common/locales/es-DO';
import localFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SellModule,
    PipesModule
  ],
  providers: [{provide: LOCALE_ID, useValue:"es-DO"}], //para cambiar en local de la app de forma global
  bootstrap: [AppComponent]
})
export class AppModule { }
