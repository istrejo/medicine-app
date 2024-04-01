import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurgeriesRoutingModule } from './surgeries-routing.module';
import { SurgeriesComponent } from './surgeries.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SurgeriesComponent],
  imports: [
    CommonModule,
    SurgeriesRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SurgeriesModule {}
