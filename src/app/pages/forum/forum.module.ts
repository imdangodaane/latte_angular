import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ContainerComponent } from './container/container.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    NbCardModule
  ]
})
export class ForumModule { }
