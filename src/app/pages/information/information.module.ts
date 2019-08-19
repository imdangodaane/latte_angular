import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule, NbAccordionModule, NbTabsetModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    NbCardModule,
    NbAccordionModule,
    NbTabsetModule
  ]
})
export class InformationModule { }
