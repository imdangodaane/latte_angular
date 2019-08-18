import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from '../_helper/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'information',
        loadChildren: './information/information.module#InformationModule'
      },
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule'
      },
      {
        path: 'forum',
        loadChildren: './forum/forum.module#ForumModule'
      },
      {
        path: 'wiki',
        loadChildren: './wiki/wiki.module#WikiModule'
      },
      {
        path: 'support',
        loadChildren: './support/support.module#SupportModule'
      },
      {
        path: 'download',
        loadChildren: './download/download.module#DownloadModule'
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      },
      // { path: '**', component: PageNotFoundComponent },
    ],
  },
  // {
  //   path: 'account',
  //   canActivate: [AuthGuard],
  //   component: ContainerComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './account/account.module#AccountModule'
  //     },
  //     {
  //       path: 'db',
  //       loadChildren: './database/database.module#DatabaseModule'
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
