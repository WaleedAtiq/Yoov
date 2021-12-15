import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
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
