import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../environments/API-references';

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

  register(data: any) {
    if (data.confirmPassword) {
      delete data.confirmPassword;
    }
    data.birthdate = data.birthdate.toLocaleDateString();
    return this.http.post<any>(`${API_URL.API_URL_REGISTER}`, data, this.httpOptions);
  }
}
