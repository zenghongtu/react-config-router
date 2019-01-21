import Page404 from './pages/Page404'
import UserLayout from './Layouts/UserLayout'
import BasicLayout from './Layouts/BasicLayout'
import Login from './pages/User/Login'
import User from './pages/User/User'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import Page1 from './pages/App/Page1'
import Page2 from './pages/App/Page2'
import Authorized from './pages/Authorized'

const routes = [
  // user
  {
    path: '/user',
    component: UserLayout,
    routes: [
      {path: '/user', redirect: '/user/login', exact: true},
      {
        path: '/user/login',
        name: 'login',
        // icon: 'login',
        component: Login
      },
      {
        path: '/user/:name',
        name: 'username',
        // icon: 'username',
        component: User
      }
    ]
  },
  // app
  {
    path: '/',
    component: BasicLayout,
    Routes: [Authorized],
    authority: ['admin', 'user'],
    routes: [
      {path: '/', redirect: '/app', exact: true},
      {
        path: '/app',
        routes: [
          {path: '/app', redirect: '/app/page-1', exact: true},
          {
            path: '/app/page-1',
            name: 'page-1',
            // icon: 'page-1',
            component: Page1
          },
          {
            path: '/app/page-2',
            name: 'page-2',
            // icon: 'page-2',
            component: Page2
          }
        ]
      },
      {
        path: '/page/page-a',
        name: 'page-a',
        // icon: 'page-a',
        component: PageA
      },
      {
        path: '/page/page-b',
        name: 'page-b',
        // icon: 'page-b',
        component: PageB
      },
      {
        component: Page404
      }
    ]
  }
]

export default routes
