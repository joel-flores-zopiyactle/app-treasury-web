import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SingUpComponent } from './page/sing-up/sing-up.component';
import { SingInComponent } from './page/sing-in/sing-in.component';



@NgModule({
  declarations: [
    SingUpComponent,
    SingInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
