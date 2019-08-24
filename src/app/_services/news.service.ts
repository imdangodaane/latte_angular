import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { API_URL } from '../../environments/API-references';

const TOTAL_PAGES = 7;

export class NewsPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  loadArticles(page: number, pageSize: number): Observable<any> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<any[]>(API_URL.API_URL_ARTICLE.ALL_ARTICLES)
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(500),
      );
  }

  load(page: number, pageSize: number): Observable<NewsPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<NewsPost[]>('../../assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(500),
      );
  }
}
