export default {
  items: [
    {
      name: 'Trang chủ',
      url: '/home',
      icon: 'icon-home',
    },
    {
      name: 'Admin',
      url: '/Admin',
      icon: 'icon-user',
    },
    {
      name: 'Danh mục chủng loại',
      url: '/SpeciesCategory',
      icon: 'icon-list',
    },

    {
      name: 'Tổ chức',
      url: '/organization',
      icon: 'cui-briefcase',
    },
    {
      name: 'Đăng kí giải cứu',
      url: '/registerSave',
      icon: 'cui-basket-loaded',
    },
    {
      name: 'Quản lý giải cứu',
      url: '/Save',
      icon: 'cui-align-center',
    },
    {
      name: 'Quản lý bài viết',
      url: '/articles',
      icon: 'icon-star',
      children: [
        {
          name: 'Sản phẩm cần giải cứu',
          url: '/articles/species',
        },
        {
          name: 'Cá nhân giải cứu',
          url: '/articles/personal',
        },
        {
          name: 'Tổ chức giải cứu',
          url: '/articles/organization',

        },
      ],
    },


  ],
};
