import { Component, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../_services/layout.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  userInformation = {
    name: 'Latte',
    title: 'Administrator',
    // tslint:disable-next-line: max-line-length
    imageUrl: 'https://lh3.googleusercontent.com/-78QMrkA9O_M/WPyQqsiNvVI/AAAAAAAAAHQ/roLXAijaKaMNoSHeDXj4KCTamzsqP2LNwCEwYBhgL/w140-h139-p/autodraw%2B15-22-21.png',
  };
  menuItems = [
    {
      title: 'Trang chủ',
      link: '/',
      icon: 'home-outline',
    },
    {
      title: 'Tải game',
      link: '/download',
      icon: 'download-outline',
    },
    {
      title: 'Thông tin server',
      link: '/information',
      icon: 'info-outline',
    },
    {
      title: 'Tài khoản',
      icon: 'person-outline',
      children: [
        {
          title: 'Đăng nhập',
          link: '/login',
          icon: 'corner-down-right-outline',
        },
        {
          title: 'Đăng ký tài khoản',
          link: '/register',
          icon: 'plus',
        },
      ]
    },
    {
      title: 'Tin tức',
      link: '/news',
      icon: 'credit-card-outline',
    },
    {
      title: 'Diễn đàn',
      link: '/forum',
      icon: 'browser',
    },
    {
      title: 'Wiki',
      link: '/wiki',
      icon: 'edit-outline',
    },
    {
      title: 'Database',
      icon: 'folder-outline',
      children: [
        {
          title: 'Items',
          link: '/db/items',
          icon: 'shopping-bag-outline'
        },
      ],
    },
    {
      title: 'Hỗ trợ',
      link: '/support',
      icon: 'question-mark-circle-outline',
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
  ) { }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  getUserInformation() {
    return;
  }

  ngOnInit() {
  }

}
