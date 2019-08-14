import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ContainerComponent } from './container/container.component';
import {
  NbCardModule,
  NbCheckboxModule,
  NbButtonModule,
  NbInputModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  NbAlertModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    NbAlertModule
  ]
})
export class RegisterModule { }
