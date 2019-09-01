import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../_services/article.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {
  debug = false;
  carouselItems = [];

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.articleService.getAllArticle()
      .subscribe(
        res => {
          this.carouselItems = res.filter(ele => {
            if (ele.show_on_carousel) {
              return ele;
            }
          });
          if (this.debug === true) {
            console.log(this.carouselItems);
          }
        },
        err => {
          if (this.debug === true) {
            console.error(err);
          }
        }
      );
  }

}
