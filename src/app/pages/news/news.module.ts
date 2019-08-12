import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ContainerComponent } from './container/container.component';
import {
  NbCardModule,
  NbListModule,
  NbIconModule
} from '@nebular/theme';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [ContainerComponent, PostComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule
  ]
})
export class NewsModule { }
