import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableSettings } from './smart-table.settings';
import { ItemsService } from '../../../_services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  source: LocalDataSource;
  returnMessage: string;
  restrictColumns = ['id', 'createdAt', 'updatedAt', 'deletedAt'];
  smartTableSettings = SmartTableSettings;
  rowsPerPage = 10;

  constructor(
    private itemsService: ItemsService
  ) {}

  onPageChange(rowsPerPage: string) {
    this.source.setPaging(1, Number(rowsPerPage));
  }

  ngOnInit() {
    this.itemsService.getItems()
      .subscribe(
        res => {
          this.source = new LocalDataSource(res);
          this.smartTableSettings.columns = this.itemsService.getDataColumns(res);
        },
        err => {
          console.error(err);
        }
      );
  }

}
