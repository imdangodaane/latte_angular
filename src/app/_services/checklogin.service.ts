import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginService {

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserGroupId');
  }

  checkLogin() {
    if (!this.cookieService.get('token')) {
      this.logout();
    }
  }

  constructor(
    private cookieService: CookieService,
  ) {}
}
