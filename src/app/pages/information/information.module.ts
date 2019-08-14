import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule, NbAccordionModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    NbCardModule,
    NbAccordionModule
  ]
})
export class InformationModule { }
