import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiRoutingModule } from './wiki-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    WikiRoutingModule,
    NbCardModule
  ]
})
export class WikiModule { }
