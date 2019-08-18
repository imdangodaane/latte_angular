import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes: Routes = [
  {
    path: 'article',
    component: ArticleDetailComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
