import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    NbCardModule
  ]
})
export class SupportModule { }
