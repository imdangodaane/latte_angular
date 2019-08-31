import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../_services/news.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  // newsCard = {
  //   news: [],
  //   placeholders: [],
  //   loading: false,
  //   pageToLoadNext: 1,
  // };

  articleCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1
  };
  pageSize = 50;

  constructor(
    private newsService: NewsService
  ) {}

  loadNextArticles(cardData: any) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    this.newsService.loadArticles(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        nextNews.forEach(ele => {
          try {
            ele.create_at = new Date(Date.parse(ele.create_at)).toLocaleString();
            ele.badges = JSON.parse(ele.badges);
          } catch (error) {}
        });
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  // loadNext(cardData: any) {
  //   if (cardData.loading) { return; }

  //   cardData.loading = true;
  //   this.newsService.load(cardData.pageToLoadNext, this.pageSize)
  //     .subscribe(nextNews => {
  //       cardData.news.push(...nextNews);
  //       cardData.loading = false;
  //       cardData.pageToLoadNext++;
  //     });
  // }

  ngOnInit() {
    // this.loadNext(this.newsCard);
    this.loadNextArticles(this.articleCard);
  }

}
