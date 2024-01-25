import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Register from '@pages/Register';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import Detail from '@pages/Detail';
import Profile from '@pages/Profile';
import Bookmark from '@pages/Bookmark';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/detail',
    name: 'Detail',
    protected: false,
    component: Detail,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: false,
    component: Bookmark,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
