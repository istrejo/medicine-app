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
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';

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
  TableModule,
  CardModule,
  MultiSelectModule,
  TagModule,
  SliderModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [...primengModules]],
  exports: [...primengModules],
})
export class PrimengModule {}
