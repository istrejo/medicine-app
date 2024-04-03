import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { PrimengModule } from '../../primeng/primeng.module';

@NgModule({
  declarations: [BranchesComponent],
  imports: [CommonModule, BranchesRoutingModule, PrimengModule],
})
export class BranchesModule {}
