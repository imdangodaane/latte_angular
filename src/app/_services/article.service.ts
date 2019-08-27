import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { API_URL } from '../../environments/API-references';
import { Article } from '../_models/Article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Accept: 'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
  ) {}

  newArticle(article: Article): Observable<any> {
    console.log(API_URL.API_URL_ARTICLE.NEW_ARTICLE);
    console.log(JSON.stringify(article));
    return this.http.post<any>(API_URL.API_URL_ARTICLE.NEW_ARTICLE, JSON.stringify(article), this.httpOptions)
      .pipe(map(res => {
        console.log(res);
      }));
  }

  getArticleById(id: number) {
    return this.http.get<any>(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('id', id.toString()));
  }

  getArticleBySlug(slug: string) {
    return this.http.get(API_URL.API_URL_ARTICLE.ARTICLE_BY_SLUG.replace('slug', slug));
  }

  updateArticleById(id: number, article: Article) {
    return this.http.put(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('id', id.toString()), JSON.stringify(article));
  }

  updateArticleBySlug(slug: string, article: Article) {
    return this.http.put(API_URL.API_URL_ARTICLE.ARTICLE_BY_SLUG.replace('slug', slug), JSON.stringify(article));
  }

  deleteArticleById(id: number) {
    return this.http.delete(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('id', id.toString()));
  }

  deleteArticleBySlug(slug: string) {
    return this.http.delete(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('slug', slug));
  }
}
