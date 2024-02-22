import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { StyleClassModule } from 'primeng/styleclass';

const primengModules = [ButtonModule, RippleModule, StyleClassModule];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, [...primengModules]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
