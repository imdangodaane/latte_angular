import { Component, OnInit } from '@angular/core';
import { NbSidebarService} from '@nebular/theme';
import { Router } from '@angular/router';
import { LayoutService } from '../../_services/layout.service';
import { MenuItems } from './MenuItems';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  userInformation: {
    id: string,
    gid: number
  };
  menuItems: Array<object>;
  groupIdReferences = {
    0: 'Player',
    15: 'VIP Member',
    99: 'Administrator'
  };

  constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  getUserInformation() {
    // this.userInformation.id = localStorage.getItem('currentUser');
    // this.userInformation.gid = +localStorage.getItem('currentUserGroupId');
    // console.log(this.userInformation);
    this.userInformation = this.authenticationService.getUserInformation();
  }

  onLogin() {
    this.router.navigate(['login'], { queryParams: { returnUrl: this.router.url } });
  }

  onLogout() {
    this.authenticationService.logout();
    location.reload();
  }

  onCreateNews() {
    this.router.navigate(['/article/new-article']);
  }

  ngOnInit() {
    this.menuItems = MenuItems;
    this.getUserInformation();
  }

}
