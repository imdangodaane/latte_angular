import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './container/container.component';
import { HomeModule } from './home/home.module';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbActionsModule,
  NbPopoverModule,
  NbButtonModule,
  NbMenuModule,
  NbUserModule,
  NbIconModule
} from '@nebular/theme';
import { NewsModule } from './news/news.module';
import { DownloadModule } from './download/download.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { DatabaseModule } from './database/database.module';
import { InformationModule } from './information/information.module';
import { ForumModule } from './forum/forum.module';
import { WikiModule } from './wiki/wiki.module';
import { SupportModule } from './support/support.module';
import { ArticleModule } from './article/article.module';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NewsModule,
    DownloadModule,
    RegisterModule,
    LoginModule,
    AccountModule,
    DatabaseModule,
    NbActionsModule,
    NbPopoverModule,
    NbButtonModule,
    NbMenuModule,
    NbSidebarModule,
    NbMenuModule,
    InformationModule,
    ForumModule,
    WikiModule,
    SupportModule,
    NbUserModule,
    NbIconModule,
    ArticleModule
  ]
})
export class PagesModule { }
