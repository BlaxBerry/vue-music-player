import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search/index.vue')
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/SongLists/index.vue')
  },
  {
    path: '/sheets',
    name: 'Sheets',
    component: () => import('../views/SongSheets/index.vue')
  }, {
    path: '/mvs',
    name: 'MVs',
    component: () => import('../views/MVs/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail/SheetDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
