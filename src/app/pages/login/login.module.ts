import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { ContainerComponent } from './container/container.component';
import {
  NbAlertModule,
  NbCheckboxModule,
  NbIconModule,
  NbCardModule,
  NbActionsModule,
  NbLayoutModule
} from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    NbCardModule,
    NbActionsModule,
    NbLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
