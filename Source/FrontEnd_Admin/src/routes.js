import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const AdminList = React.lazy(() => import("./views/Admins/AdminList/AdminList"));
const AdminCreate = React.lazy(() => import("./views/Admins/AdminCreate/AdminCreate"));
const AdminUpdate = React.lazy(() => import("./views/Admins/AdminUpdate/AdminUpdate"));

const UserList = React.lazy(() => import("./views/User/List/List"));
const UserUpdate = React.lazy(() => import("./views/User/Update/Update"));
const UserCreate = React.lazy(() => import("./views/User/Create/Create"));

const OrganizationCategoryList = React.lazy(() => import("./views/OrganizationCategory/List/List"));
const OrganizationCategoryCreate = React.lazy(() => import("./views/OrganizationCategory/Create/Create"));
const OrganizationCategoryUpdate = React.lazy(() => import("./views/OrganizationCategory/Update/Update"));

const OrganizationList = React.lazy(() => import("./views/Organization/List/List"));
const OrganizationCreate = React.lazy(() => import("./views/Organization/Create/Create"));
const OrganizationUpdate = React.lazy(() => import("./views/Organization/Update/Update"));

// const PersonalAriclesList = React.lazy(() => import("./views/Articles/PersonalArticles/PersonalArticlesList/PersonalArticles"));
// const PersonalAriclesCreate = React.lazy(() => import("./views/Articles/PersonalArticles/PersonalArticlesCreate/PersonalArticlesCreate"));
// const PersonalAriclesUpdate = React.lazy(() => import("./views/Articles/PersonalArticles/PersonalArticlesUpdate/PersonalArticlesUpdate"));


const CategoryList = React.lazy(() => import("./views/Category/List/List"));
const CategoryCreate = React.lazy(() => import("./views/Category/Create/Create"));
const CategoryUpdate = React.lazy(() => import("./views/Category/Update/Update"));

const SpeciesCategoryList = React.lazy(() => import("./views/SpeciesCategory/CategoryList/CategoryList"));
const SpeciesCategoryCreate = React.lazy(() => import("./views/SpeciesCategory/CategoryCreate/CategoryCreate"));
const SpeciesCategoryUpdate = React.lazy(() => import("./views/SpeciesCategory/CategoryUpdate/CategoryUpdate"));

const SpeciesList = React.lazy(() => import("./views/Species/SpeciesList/SpeciesList"));
const SpeciesCreate = React.lazy(() => import("./views/Species/SpeciesCreate/SpeciesCreate"));
const SpeciesUpdate = React.lazy(() => import("./views/Species/SpeciesUpdate/SpeciesUpdate"));

// const Organization = React.lazy(() => import("./views/Organizations/OrganizationList"));

// const RegisterSave = React.lazy(() => import("./views/RegisterSave/RegisterSaveList"));

// const saveList = React.lazy(() => import("./views/Save/SaveList"));
// const saveCreate = React.lazy(() => import("./views/Save/SaveCreate/SaveCreate"));
// const saveUpdate = React.lazy(() => import("./views/Save/SaveUpdate/SaveUpdate"));


const CommentList = React.lazy(() => import("./views/Comment/List"));

const ContactList = React.lazy(() => import("./views/Contact/List"));

const RegistToBeRescued = React.lazy(() => import("./views/RegistToBeRescued/RegistToBeRescued"));

const RescueCategoryList = React.lazy(() => import("./views/RescueCategory/List/List"));
const RescueCategoryUpdate = React.lazy(() => import("./views/RescueCategory/Update/Update"));
const RescueCategoryCreate = React.lazy(() => import("./views/RescueCategory/Create/Create"));


const RescueList = React.lazy(() => import("./views/Rescue/RescueList"));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

  { path: '/Admin',exact: true,  name: 'Danh s??ch Admin', component: AdminList },
  { path: '/Admin/create',exact: true,  name: 'Th??m m???i Admin', component: AdminCreate },
  { path: '/Admin/:id', exact: true, name: 'Ch???nh s???a Admin', component: AdminUpdate },

  { path: '/User',exact: true,  name: 'Danh s??ch ng?????i d??ng', component: UserList },
  { path: '/User/create',exact: true,  name: 'Th??m m???i ng?????i d??ng', component: UserCreate },
  { path: '/User/:id', exact: true, name: 'Ch???nh s???a ng?????i d??ng', component: UserUpdate },

  { path: '/organizationCategory', exact: true, name: 'Danh m???c t??? ch???c', component: OrganizationCategoryList },
  { path: '/organizationCategory/create', exact: true, name: 'T???o m???i danh m???c t??? ch???c', component: OrganizationCategoryCreate },
  { path: '/organizationCategory/:id', exact: true, name: 'Ch???nh s???a danh m???c t??? ch???c', component: OrganizationCategoryUpdate },

  { path: '/organization', exact: true, name: 'B??i vi???t t??? ch???c', component: OrganizationList },
  { path: '/organization/create', exact: true, name: 'T???o m???i b??i vi???t t??? ch???c', component: OrganizationCreate },
  { path: '/organization/:id', exact: true, name: 'Ch???nh s???a b??i vi???t t??? ch???c', component: OrganizationUpdate },

  { path: '/category', exact: true, name: 'Danh m???c ch???ng lo???i', component: CategoryList },
  { path: '/category/create', exact: true, name: 'T???o m???i danh m???c ch???ng lo???i', component: CategoryCreate },
  { path: '/category/:id', exact: true, name: 'Ch???nh s???a danh m???c ch???ng lo???i', component: CategoryUpdate },

  { path: '/speciesCategory', exact: true, name: 'Ph??n lo???i theo danh m???c', component: SpeciesCategoryList },
  { path: '/speciesCategory/create', exact: true, name: 'T???o m???i ', component: SpeciesCategoryCreate },
  { path: '/speciesCategory/:id', exact: true, name: 'Ch???nh s???a ', component: SpeciesCategoryUpdate },

  // { path: '/SpeciesCategory', exact: true, name: 'Danh m???c Ch???ng lo???i', component: CategoryList },
  // { path: '/SpeciesCategory/create', exact: true, name: 'Th??m m???i danh m???c Ch???ng lo???i', component: CategoryCreate },
  // { path: '/SpeciesCategory/:id',exact: true,  name: 'Ch???nh s???a danh m???c ch???ng lo???i', component: CategoryUpdate },

  { path: '/Species', exact: true, name: 'B??i vi???t', component: SpeciesList },
  { path: '/Species/create', exact: true, name: 'Th??m m???i b??i vi???t', component: SpeciesCreate },
  { path: '/Species/:id',exact: true,  name: 'Ch???nh s???a b??i vi???t', component: SpeciesUpdate },

  { path: '/comment', exact: true, name: 'Danh s??ch b??nh lu???n', component: CommentList },

  { path: '/contact', exact: true, name: 'Li??n h???', component: ContactList },

  { path: '/registToBeRescued', exact: true, name: 'Danh s??ch ng?????i ????ng k?? nh???n gi???i c???u', component: RegistToBeRescued },

  { path: '/rescueCategory', exact: true, name: 'Danh m???c ng?????i ????n v??? gi???i c???u', component: RescueCategoryList },
  { path: '/rescueCategory/create', exact: true, name: 'Th??m m???i', component: RescueCategoryCreate },
  { path: '/rescueCategory/:id',exact: true,  name: 'Ch???nh s???a', component: RescueCategoryUpdate },

  { path: '/rescue', exact: true, name: 'Danh s??ch mu???n gi???i c???u', component: RescueList },

  // { path: '/save', exact: true, name: 'danh s??ch gi???i c???u', component: saveList },
  // { path: '/save/create', exact: true, name: 'T???o m???i', component: saveCreate },
  // { path: '/save/:id', exact: true, name: 'Ch???nh s???a', component: saveUpdate },
  //
  // { path: '/articles/Species', exact: true, name: 'B??i vi???t ch???ng lo???i', component: SpeciesArticlesList },
  // { path: '/articles/Species/create', exact: true, name: 'Th??m m???i b??i vi???t ch???ng lo???i', component: SpeciesArticlesCreate },
  // { path: '/articles/Species/:id', exact: true, name: 'ch???nh s???a b??i vi???t ch???ng lo???i', component: SpeciesArticlesUpdate },
  //
  // { path: '/articles/Personal', exact: true, name: 'B??i vi???t c?? nh??n', component: PersonalAriclesList },
  // { path: '/articles/Personal/create', exact: true, name: 'Th??m m???i b??i vi???t c?? nh??n', component: PersonalAriclesCreate },
  // { path: '/articles/Personal/:id', exact: true, name: 'Ch???nh s???a b??i vi???t c?? nh??n', component: PersonalAriclesUpdate },
  //
  //
  //
  // { path: '/organization', name: 'Danh s??ch T??? ch???c', component: Organization },
  //
  // { path: '/registerSave', name: 'Danh s??ch ????ng k?? gi???i c???u', component: RegisterSave },

  { path: '/', exact: true, name: 'Trang ch???' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];
export default routes;
