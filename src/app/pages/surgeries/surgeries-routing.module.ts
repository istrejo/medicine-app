import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurgeriesComponent } from './surgeries.component';

const routes: Routes = [{ path: '', component: SurgeriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurgeriesRoutingModule { }
