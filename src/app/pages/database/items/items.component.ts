import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableSettings } from './smart-table.settings';
import { ItemsService } from '../../../_services/items.service';
import { NbToastrService } from '@nebular/theme';

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
  private index = 0;

  constructor(
    private itemsService: ItemsService,
    private toastrService: NbToastrService,
  ) {}

  showToast(message: string, title: string, position: any, status: any) {
    this.index += 1;
    this.toastrService.show(
      message,
      title,
      { position, status }
    );
  }

  onPageChange(rowsPerPage: any) {
    this.source.setPaging(1, Number(rowsPerPage));
  }

  onAdd(event: any): any {
    return;
  }

  onEdit(event: any): any {
    return;
  }

  onDelete(event: any): any {
    return;
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
