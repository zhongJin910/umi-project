const routes = [
  { path: '/', component: '@/pages/index' },

  {
    path: '/test',
    component: '@/pages/test/index',
    name: 'test',
    icon: 'rest',
  },
  {
    path: '/home',
    component: '@/pages/home/index',
    name: 'home',
    icon: 'setting',
  },
  {
    path: '/user',
    component: '@/pages/user/index',
    name: 'user',
    icon: 'rest',
  },
  {
    path: '/config',
    component: '@/pages/config/index',
    name: 'config',
    icon: 'rest',
  },
  {
    path: '/login',
    component: '@/pages/login/index',
    name: 'login',
    icon: 'rest',
  },
];

export default routes;
