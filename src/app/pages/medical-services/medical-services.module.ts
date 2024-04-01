import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalServicesRoutingModule } from './medical-services-routing.module';
import { MedicalServicesComponent } from './medical-services.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MedicalServicesComponent],
  imports: [
    CommonModule,
    MedicalServicesRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
})
export class MedicalServicesModule {}
