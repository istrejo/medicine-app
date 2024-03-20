import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorListRoutingModule } from './doctor-list-routing.module';
import { DoctorListComponent } from './doctor-list.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorListComponent],
  imports: [
    CommonModule,
    DoctorListRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
})
export class DoctorListModule {}
