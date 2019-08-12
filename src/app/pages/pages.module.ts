import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './container/container.component';
import { HomeModule } from './home/home.module';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule
} from '@nebular/theme';
import { NewsModule } from './news/news.module';
import { DownloadModule } from './download/download.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';


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
    LoginModule
  ]
})
export class PagesModule { }
