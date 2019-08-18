import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleDetailComponent
  },
  {
    path: ':articleUrl',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
