import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, PrimengModule, FontAwesomeModule],
  exports: [SidebarComponent],
})
export class CoreModule {}
