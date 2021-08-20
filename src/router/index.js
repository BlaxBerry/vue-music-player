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
    path: '/detail/sheet',
    name: 'DetailSheet',
    component: () => import('../views/Detail/Sheet/SheetDetail.vue')
  },
  {
    path: '/detail/mv',
    name: 'DetailMV',
    component: () => import('../views/Detail/MV/MVDetail.vue')
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
