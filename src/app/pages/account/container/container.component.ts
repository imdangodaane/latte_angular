import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
// import { SmartTableService } from '../../_service/smart-table.service';
// import { Settings } from './smart-table.settings';
// import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  // // source is LocalDataSource object is use to load to smart-table in template
  // source: LocalDataSource;
  // // rawData is load from API
  // rawData: Array<object>;
  // // rowsPerPage is default rows display in a smart-table
  // rowsPerPage = 10;
  // // settings is an object which is use to load to smart-table as config
  // settings = Settings;
  // restrictColumns = ['id', 'createdAt', 'updatedAt', 'deletedAt'];
  // statusMessage: string;

  constructor(
    // private smartTableService: SmartTableService,
  ) {}

  // onPageChange(rowsPerPage: string) {
  //   this.source.setPaging(1, Number(rowsPerPage));
  // }

  // getDataFromAPI() {
  //   this.smartTableService.getDataArray()
  //     .subscribe(
  //       res => {
  //         this.source = new LocalDataSource(res);
  //         this.settings.columns = this.smartTableService.getDataColumns(res, this.restrictColumns);
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }

  // onAdd(event: any) {
  //   this.smartTableService.addData(event.newData, this.restrictColumns)
  //     .subscribe(
  //       res => {
  //         this.source.append(res);
  //         this.statusMessage = 'Success';
  //         setTimeout(() => this.statusMessage = null, 1500);
  //       },
  //       err => {
  //         this.statusMessage = 'Failed';
  //         setTimeout(() => this.statusMessage = null, 1500);
  //       },
  //     );
  // }

  // onEdit(event: any) {
  //   this.smartTableService.editData(event.data, event.newData, this.restrictColumns)
  //     .subscribe(
  //       res => {
  //         this.source.update(event.data, res);
  //         this.statusMessage = 'Success';
  //         setTimeout(() => this.statusMessage = null, 1500);
  //         event.confirm.resolve();
  //       },
  //       err => {
  //         this.statusMessage = 'Failed';
  //         setTimeout(() => this.statusMessage = null, 1500);
  //       },
  //     );
  // }

  // onDelete(event: any) {
  //   if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
  //     this.smartTableService.deleteData(event.data)
  //     .subscribe(
  //       // res => {
  //       //   this.source.update(event.data, res);
  //       //   this.statusMessage = 'Success';
  //       //   setTimeout(() => this.statusMessage = null, 1500);
  //       //   event.confirm.resolve();
  //       // },
  //       // err => {
  //       //   this.statusMessage = 'Failed';
  //       //   setTimeout(() => this.statusMessage = null, 1500);
  //       // },
  //     );
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }


  ngOnInit() {
    // this.getDataFromAPI();
  }
}
