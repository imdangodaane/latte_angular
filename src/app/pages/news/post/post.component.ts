import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() article: any;

  getArticleIntro(intro: string) {
    if (intro.length > 150) {
      return this.article.intro = this.article.intro.slice(0, 150);
    } else {
      return this.article.intro;
    }
  }

  // convertDatetime(datetime: any) {
  //   console.log(datetime);
  //   this.article.create_at = new Date(Date.parse(datetime.create_at)).toLocaleString();
  // }

  constructor() { }

  ngOnInit() {
  }

}
