import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { StyleClassModule } from 'primeng/styleclass';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeCR from '@angular/common/locales/es-CR';
import localeUS from '@angular/common/locales/es-US';

const primengModules = [ButtonModule, RippleModule, StyleClassModule];

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [...primengModules],
    CoreModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeCR, 'es-CR');
    registerLocaleData(localeUS, 'es-US');
  }
}
