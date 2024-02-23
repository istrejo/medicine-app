import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StyleClassModule } from 'primeng/styleclass';

import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../primeng/primeng.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StyleClassModule,
    SharedModule,
    PrimengModule,
  ],
})
export class HomeModule {}
