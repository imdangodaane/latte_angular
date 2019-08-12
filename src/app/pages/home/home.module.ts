import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule
  ]
})
export class HomeModule { }
