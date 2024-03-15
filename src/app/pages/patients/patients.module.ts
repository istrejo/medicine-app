import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PatientsComponent],
  imports: [CommonModule, PatientsRoutingModule, PrimengModule, FormsModule],
})
export class PatientsModule {}
