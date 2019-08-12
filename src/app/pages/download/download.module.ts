import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule, NbAccordionModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    NbCardModule,
    NbAccordionModule
  ]
})
export class DownloadModule { }
