import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog'
import BlogDetail from '../views/BlogDetail'
import PrivacyPolicy from '../views/PrivacyPolicy'
import OpenPlatform from '../views/OpenPlatform'
import Layout from '../components/layout/index'
import LayoutTwo from '../components/layoutTwo/index'
import '../assets/style.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: LayoutTwo,
    children: [
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/openplatform',
        name: 'OpenPlatform',
        component: OpenPlatform
      }
      ,
      {
        path: '/blog',
        name: 'Blog',
        component: Blog
      },
      {
        path: '/blogdetail',
        name: 'BlogDetail',
        component: BlogDetail
      },
      {
        path: '/privacypolicy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
      }
    ]
  },
  // {
  //   path: '/layout',
  //   name: 'Layout',
  //   component: Layout
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
