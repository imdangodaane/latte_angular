import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../_services/article.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  debug = false;
  article: any;
  currentUser: any;

  getArticleBySlug(slug: string) {
    this.articleService.getArticleBySlug(slug)
      .subscribe(res => {
        this.article = res;
      });
  }

  editArticleById() {
    return;
  }

  setArticleOnCarousel() {
    this.articleService.setArticleOnCarousel(this.article.id)
      .subscribe(
        res => {
          if (this.debug === true) {
            console.log(res);
          }
          this.showToast('Set lên Carousel thành công', 'Success', 'top-right', 'success');
        },
        err => {
          if (this.debug === true) {
            console.error(err);
          }
          this.showToast('Set lên Carousel thất bại', 'Fail', 'top-right', 'danger');
        }
      );
  }

  showToast(message: string, title: string, position: any, status: any) {
    this.toastrService.show(
      message,
      title,
      { position, status }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private authenticationService: AuthenticationService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.getUserInformation();
    this.getArticleBySlug(this.route.snapshot.paramMap.get('slug'));
  }

}
