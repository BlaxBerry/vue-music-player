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
    component: Home,
    meta: {
      hidePlaybar: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search/index.vue'),
    meta: {
      hidePlaybar: false
    }
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/SongLists/index.vue'),
    meta: {
      hidePlaybar: true
    }
  },
  {
    path: '/sheets',
    name: 'Sheets',
    component: () => import('../views/SongSheets/index.vue'),
    meta: {
      hidePlaybar: true
    }
  }, {
    path: '/mvs',
    name: 'MVs',
    component: () => import('../views/MVs/index.vue'),
    meta: {
      hidePlaybar: true
    }
  },
  {
    path: '/detail/sheet',
    name: 'DetailSheet',
    component: () => import('../views/Detail/Sheet/SheetDetail.vue'),
    meta: {
      hidePlaybar: true
    }
  },
  {
    path: '/detail/mv',
    name: 'DetailMV',
    component: () => import('../views/Detail/MV/MVDetail.vue'),
    meta: {
      hidePlaybar: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue'),
    meta: {
      hidePlaybar: true
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
