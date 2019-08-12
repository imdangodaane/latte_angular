import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../_models/registerModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) {}

  register(data: RegisterModel) {
    if (data.confirmPassword) {
      delete data.confirmPassword;
    }
    console.log(data.birthdate);
    data.birthdate = data.birthdate.toLocaleDateString();
    console.log(data.birthdate);
    return this.http.post<any>(`${environment.apiUrl}register/`, data, this.httpOptions)
            .pipe();
  }
}
