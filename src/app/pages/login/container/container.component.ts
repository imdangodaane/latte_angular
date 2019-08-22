import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  hidePassword = true;
  returnMessage: string;
  returnUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate([this.returnUrl]);
    // }
    console.log(this.returnUrl);
    if (this.authenticationService.checkLogin()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onLogin(data: any) {
    this.authenticationService.login(data.value.userid, data.value.user_pass)
      .subscribe(
        res => {
          this.router.navigate([this.returnUrl]);
        },
        err => {
          this.returnMessage = err.error.detail;
          setTimeout(() => this.returnMessage = null, 1500);
        }
      );
  }

  ngOnInit() {
  }

}
