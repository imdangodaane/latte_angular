import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import {
  NbCardModule, NbLayoutModule
} from '@nebular/theme';


@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NbCardModule,
    NbLayoutModule
  ]
})
export class ArticleModule { }
