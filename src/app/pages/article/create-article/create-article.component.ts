import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import './ckeditor.loader';
// import 'ckeditor';
import { Article } from '../../../_models/Article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateArticleComponent implements OnInit {
  article: Article;

  onSubmit(articleForm: any, myCkeditor: any) {
    this.article.title = articleForm.value.title;
    this.article.content = myCkeditor.innerValue;
    console.log(this.article.title);
    console.log(this.article.content);
    // console.log(articleForm.value.title);
    // console.log(myCkeditor.innerValue);
  }

  onPreview(articleForm: any, myCkeditor: any) {
    this.article.title = articleForm.value.title;
    this.article.content = myCkeditor._data;
    console.log(this.article.title);
    console.log(this.article.content);
  }

  onTinyMCE(tinyMCE: any) {
    console.log(tinyMCE);
  }

  constructor() { }

  ngOnInit() {
    this.article = {
      title: '',
      content: '',
      badges: [],
      author: '',
    };
  }

}
