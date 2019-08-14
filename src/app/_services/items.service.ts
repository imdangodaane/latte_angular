import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/API-references';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) {}

  getItems() {
    return this.http.get<any>(API_URL.API_URL_ITEMS)
      .pipe(map(res => {
        return res;
      }));
  }

  getDataColumns(dataArray: Array<object>, restrictedColumns?: Array<string>) {
    // get data's columns from data array
    const result = {};
    for (const prop in dataArray[0]) {
      if (prop) {
        if (restrictedColumns && restrictedColumns.includes(prop)) {
          result[prop] = {
            title: prop.charAt(0).toUpperCase() + prop.slice(1),
            addable: false,
            editable: false
          };
        } else { result[prop] = {title: prop.charAt(0).toUpperCase() + prop.slice(1)}; }
      }
    }
    return result;
  }
}
