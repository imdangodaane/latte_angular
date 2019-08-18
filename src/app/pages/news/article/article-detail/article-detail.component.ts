import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article = {
    imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
    articleUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
    title: 'First',
    content: 'Something ahohoho',
    text: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
