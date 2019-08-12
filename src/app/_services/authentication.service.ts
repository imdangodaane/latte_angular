import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private jwtService: JwtHelperService
  ) {
    // this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUserSubject = new BehaviorSubject<any>(this.cookieService.get('token'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const loginUrl = environment.apiUrl + 'authentication/login/';
    return this.http.post<any>(loginUrl, { userid: username, user_pass: password })
      .pipe(map(
        user => {
          if (user && user.token) {
            const decodedToken = this.jwtService.decodeToken(user.token);
            // console.log(decodedToken.exp);
            const expireAt = new Date(decodedToken.exp);
            // console.log(expireTime);
            // console.log(decodedToken.exp);
            // const expireAt: Date = new Date(decodedToken.exp * 1000);
            // console.log(expireAt);
            // localStorage.setItem('currentUser', user);
            this.cookieService.set('token', user.token, expireAt);
            this.currentUserSubject.next(user);
          }
          return user;
        },
      ));
  }

  logout() {
    // localStorage.removeItem('currentUser');
    this.cookieService.delete('token');
    this.currentUserSubject.next(null);
  }
}
