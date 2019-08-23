import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { delay, map } from 'rxjs/operators';

import { API_URL } from '../../environments/API-references';
import { Article } from '../_models/Article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) {}

  newArticle(article: Article) {
    return this.http.post(JSON.stringify(article), API_URL.API_URL_ARTICLE.NEW_ARTICLE);
  }

  getArticleById(id: number) {
    return this.http.get<Article>(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('id', id.toString()));
  }

  getArticleBySlug(slug: string) {
    return this.http.get<Article>(API_URL.API_URL_ARTICLE.ARTICLE_BY_SLUG.replace('slug', slug));
  }

  updateArticleById(id: number, article: Article) {
    return this.http.put(JSON.stringify(article), API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('id', id.toString()));
  }

  updateArticleBySlug(slug: string, article: Article) {
    return this.http.put(JSON.stringify(article), API_URL.API_URL_ARTICLE.ARTICLE_BY_SLUG.replace('slug', slug));
  }

  deleteArticleById(id: number) {
    return this.http.delete(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('id', id.toString()));
  }

  deleteArticleBySlug(slug: string) {
    return this.http.delete(API_URL.API_URL_ARTICLE.ARTICLE_BY_ID.replace('slug', slug));
  }
}
