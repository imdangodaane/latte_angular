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
import { CarouselModule } from 'angular-bootstrap-md';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { CarouselDetailComponent } from './carousel-detail/carousel-detail.component';

@NgModule({
  declarations: [ContainerComponent, PostComponent, CarouselListComponent, CarouselDetailComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    CarouselModule
  ]
})
export class NewsModule { }
