import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  EditorModule
} from '@tinymce/tinymce-angular';
import {
  CKEditorModule
} from 'ngx-ckeditor';
import {
  PipeModule
} from '../../_helper/pipe/pipe.module';

import {
  ArticleRoutingModule
} from './article-routing.module';
import {
  ArticleDetailComponent
} from './article-detail/article-detail.component';
import {
  NbCardModule,
  NbLayoutModule,
  NbButtonModule,
  NbCheckboxModule
} from '@nebular/theme';
import {
  CreateArticleComponent
} from './create-article/create-article.component';


@NgModule({
  declarations: [ArticleDetailComponent, CreateArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NbCardModule,
    NbLayoutModule,
    FormsModule,
    NbButtonModule,
    EditorModule,
    CKEditorModule,
    PipeModule,
    NbCheckboxModule
  ]
})
export class ArticleModule {}
