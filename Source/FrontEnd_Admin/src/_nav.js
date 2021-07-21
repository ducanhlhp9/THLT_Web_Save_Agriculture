export default {
  items: [
    {
      name: 'Trang chủ',
      url: '/home',
      icon: 'icon-home',
    },
    {
      name: 'Danh mục chủng loại',
      url: '/category',
      icon: 'icon-list',
    },
    {
      name: 'Phân loại chủng loại',
      url: '/speciesCategory',
      icon: 'icon-list',
    },
    {
      name: 'Danh mục Tổ chức',
      url: '/organizationCategory',
      icon: 'cui-briefcase',
    },
    {
      name: 'Danh mục ĐK giải cứu',
      url: '/rescueCategory',
      icon: 'cui-briefcase',
    },
    {
      name: 'Đăng kí giải cứu',
      url: '/rescue',
      icon: 'cui-briefcase',
    },
    {
      name: 'Đăng kí nhận giải cứu',
      url: '/registToBeRescued',
      icon: 'cui-briefcase',
    },
    {
      name: 'Danh sách bình luận',
      url: '/comment',
      icon: 'cui-briefcase',
    },
    {
      name: 'Danh sách liên hệ',
      url: '/contact',
      icon: 'cui-briefcase',
    },
    {
      name: 'Quản lý tài khoản',
      url: '/account',
      icon: 'icon-user',
      children: [
        {
          name: 'Admin',
          url: '/Admin',
        },
        {
          name: 'Người dùng',
          url: '/User',

        },
      ],
    },
    {
      name: 'Quản lý bài viết',
      url: '/articles',
      icon: 'icon-star',
      children: [
        {
          name: 'Chủng loại',
          url: '/Species',
        },
        {
          name: 'Tổ chức',
          url: '/organization',

        },
      ],
    },


  ],
};
