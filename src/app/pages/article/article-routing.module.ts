import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthGuard } from '../../_helper/auth.guard';


const routes: Routes = [
  {
    path: 'new-article',
    component: CreateArticleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: ArticleDetailComponent,
  },
  {
    path: ':articleUrl',
    component: ArticleDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
