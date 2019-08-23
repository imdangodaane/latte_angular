import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { CKEditorModule } from 'ng2-ckeditor';
// import { CKEditorModule } from 'ckeditor4-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from 'ngx-ckeditor';
import { PipeModule } from '../../_helper/pipe/pipe.module';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import {
  NbCardModule, NbLayoutModule, NbButtonModule
} from '@nebular/theme';
import { CreateArticleComponent } from './create-article/create-article.component';


@NgModule({
  declarations: [ArticleDetailComponent, CreateArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NbCardModule,
    NbLayoutModule,
    // CKEditorModule,
    FormsModule,
    NbButtonModule,
    EditorModule,
    CKEditorModule,
    PipeModule
  ]
})
export class ArticleModule { }
