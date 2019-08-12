import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from '../_helper/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: ContainerComponent,
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContainerComponent,
    children: [
      {
        path: '',
        loadChildren: './news/news.module#NewsModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'download',
        loadChildren: './download/download.module#DownloadModule'
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
