import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PrimengModule } from '../../primeng/primeng.module';

@NgModule({
  declarations: [PatientsComponent],
  imports: [CommonModule, PatientsRoutingModule, PrimengModule],
})
export class PatientsModule {}
