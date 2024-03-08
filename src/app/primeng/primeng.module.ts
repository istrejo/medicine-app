import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

const primengModules = [
  MenuModule,
  RippleModule,
  ButtonModule,
  InputTextModule,
  StyleClassModule,
  ChartModule,
  CheckboxModule,
  FileUploadModule,
  DropdownModule,
  InputSwitchModule,
  InputTextareaModule,
  CalendarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [...primengModules]],
  exports: [...primengModules],
})
export class PrimengModule {}
