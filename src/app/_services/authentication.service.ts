import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';

import { API_URL } from '../../environments/API-references';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': 'http://139.59.192.246:8080'
  //   })
  // };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private jwtService: JwtHelperService
  ) {
    // this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    // this.currentUserSubject = new BehaviorSubject<any>(this.cookieService.get('token'));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue() {
  //   return this.currentUserSubject.value;
  // }

  checkLogin() {
    return this.cookieService.get('token');
  }

  getUserInformation() {
    if (!this.checkLogin()) {
      return;
    }
    const decodedData = this.jwtService.decodeToken(this.checkLogin());
    return {
      id: decodedData.id,
      gid: decodedData.gid
    };
  }

  login(username: string, password: string) {
    // const loginUrl = 'http://localhost:8000/api/authentication/login/';
    return this.http.post<any>(API_URL.API_URL_LOGIN, { userid: username, user_pass: password })
      .pipe(map(user => {
        if (user && user.token) {
          const decodedData = this.jwtService.decodeToken(user.token);
          // console.log(decodedData.exp);
          const expireAt = new Date(decodedData.exp);
          // localStorage.setItem('currentUser', decodedData.id);
          // localStorage.setItem('currentUserGroupId', decodedData.gid);
          // console.log(expireTime);
          // console.log(decodedData.exp);
          // const expireAt: Date = new Date(decodedData.exp * 1000);
          // console.log(expireAt);
          // localStorage.setItem('currentUser', user);
          this.cookieService.set('token', user.token, expireAt);
          // this.currentUserSubject.next(decodedData.id);
        }
        return user;
      },
    ));
  }

  logout() {
    // localStorage.removeItem('currentUser');
    this.cookieService.delete('token');
    // this.currentUserSubject.next(null);
  }
}
