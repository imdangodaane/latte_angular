export const MenuItems = [
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
    title: 'Đăng ký tài khoản',
    icon: 'person-outline',
    link: '/register',
    // children: [
    //   {
    //     title: 'Đăng nhập',
    //     link: '/login',
    //     icon: 'corner-down-right-outline',
    //   },
    //   {
    //     title: 'Đăng ký tài khoản',
    //     link: '/register',
    //     icon: 'plus',
    //   },
    // ]
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
        link: 'account/db/items',
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
