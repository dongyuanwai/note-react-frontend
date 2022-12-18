import Home from '@/container/Home'
import Data from '@/container/Data'
import User from '@/container/User'
import Login from '@/container/Login'
import Detail from '@/container/Detail'
import Account from '@/container/Account'
import About from '@/container/About'
import UserInfo from '@/container/UserInfo'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/data",
    component: Data
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/detail",
    component: Detail
  },
  {
    path: "/account",
    component: Account
  },
  {
    path: "/userinfo",
    component: UserInfo
  },
  {
    path: "/about",
    component: About
  },
];

export default routes