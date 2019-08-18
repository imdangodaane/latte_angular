import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article = {
    imgUrl: 'https://photos.animetvn.tv/upload/film_big/bWeTXxl.png',
    articleUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
    title: 'Cute vãi nồi =))))',
    text: '',
    content: 'Tao là Lord cmn Knight naiiiiiiiiii',
    author: '',
  };
  // tslint:disable-next-line: max-line-length
  content = `<div>Test test test test test test test test test </div>
  <img class="w-50" src="https://i.pximg.net/img-original/img/2019/07/02/01/00/22/75509990_p0.jpg" alt="Lord Knight">
  <img class="w-50" src="https://i.pximg.net/img-master/img/2019/07/08/22/54/14/75623143_p0_master1200.jpg" alt="2">
  `;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // const url = this.route.snapshot.paramMap.get('articleUrl');
    // console.log(url, 1);
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('articleUrl'), 2);
    // });
    // const url3 = this.route.snapshot.queryParamMap.get('articleUrl');
    // console.log(url3, 3);
    // this.route.queryParamMap.subscribe(queryParams => {
    //   console.log(queryParams.get('articleUrl'), 4);
    // });
  }

}
