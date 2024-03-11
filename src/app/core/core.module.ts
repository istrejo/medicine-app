import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, PrimengModule, FontAwesomeModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class CoreModule {}
