import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { ItemsComponent } from './items/items.component';
import { NbSelectModule, NbCardModule, NbAlertModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    NbSelectModule,
    NbCardModule,
    NbAlertModule,
    Ng2SmartTableModule
  ]
})
export class DatabaseModule { }
