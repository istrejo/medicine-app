import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, PrimengModule],
})
export class AuthModule {}
