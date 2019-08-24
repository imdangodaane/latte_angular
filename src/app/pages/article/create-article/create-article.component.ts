import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../_models/Article';
import { ArticleService } from '../../../_services/article.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  article: Article;
  badges = {
    news: false,
    event: false,
    hot: false,
    guide: false,
    etc: false,
  };
  previousArticleContent: object;

  createNewArticle(articleForm: any, myCkeditor: any) {
    if (!this.authenticationService.getUserInformation()) {
      localStorage.setItem('articleTitle', articleForm.value.title);
      localStorage.setItem('articleContent', myCkeditor.innerValue);
      localStorage.setItem('articleImgUrl', articleForm.value.imgUrl);
      location.reload();
    } else {
    this.article.author = this.authenticationService.getUserInformation().id;
    this.article.title = articleForm.value.title;
    this.article.content = myCkeditor.innerValue;
    this.article.badges = JSON.stringify(this.badges);
    this.article.imgUrl = articleForm.value.imgUrl;
    // SUBMIT CREATE NEW ARTICLE
    this.articleService.newArticle(this.article)
      .subscribe(
        res => {
          this.showToast('Đăng bài thành công. Đang chuyển trang.', 'Success', 'top-right', 'success');
        },
        err => {
          if (err.status > 400) {
            this.showToast('Có lỗi xảy ra', 'Error', 'top-right', 'danger');
          } else if (err.status === 201) {
            this.showToast('Đăng bài thành công. Đang chuyển trang.', 'Success', 'top-right', 'success');
            const res = JSON.parse(err.error.text.replace(/\'/g, '\"'));
            setTimeout(() => this.router.navigate(['/article', res.slug]), 2000);
          }
        }
      );
    this.clearPreviousArticleInStorage();
    }
  }

  loadPreviousArticleFromStorage() {
    this.previousArticleContent = {
      title: localStorage.getItem('articleTitle'),
      content: localStorage.getItem('articleContent'),
      imgUrl: localStorage.getItem('articleImgUrl')
    };
  }

  clearPreviousArticleInStorage() {
    localStorage.removeItem('articleTitle');
    localStorage.removeItem('articleContent');
    localStorage.removeItem('articleImgUrl');
  }

  showToast(message, title, position, status) {
    this.toastrService.show(
      message || 'Có thông báo',
      title || `Ting ting`,
      { position, status }
    );
  }

  constructor(
    private articleService: ArticleService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.article = {
      title: '',
      content: '',
      badges: '',
      author: '',
    };
    this.loadPreviousArticleFromStorage();
  }

}
