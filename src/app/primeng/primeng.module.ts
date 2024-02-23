import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';

const primengModules = [
  MenuModule,
  RippleModule,
  ButtonModule,
  InputTextModule,
  StyleClassModule,
  ChartModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [...primengModules]],
  exports: [...primengModules],
})
export class PrimengModule {}
