import { Component, OnInit } from '@angular/core';
import { Article } from '../../../_models/Article';
import { ArticleService } from '../../../_services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  article: Article;

  createNewArticle(articleForm: any, myCkeditor: any) {
    this.article.title = articleForm.value.title;
    this.article.content = myCkeditor.innerValue;
    console.log(this.article.title);
    console.log(this.article.content);
    // console.log(articleForm.value.title);
    // console.log(myCkeditor.innerValue);
    // API
    // this.articleService.newArticle();
  }

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.article = {
      title: '',
      content: '',
      badges: [],
      author: '',
      slug: '',
    };
  }
}
