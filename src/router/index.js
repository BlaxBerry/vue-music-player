import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Search/index.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search/index.vue'),
  },
  {
    path: '/hots',
    name: 'Hots',
    component: () => import('../views/Hots/index.vue'),
  },
  {
    path: '/songs',
    name: 'Songs',
    component: () => import('../views/Songs/index.vue'),
  },
  {
    path: '/mvs',
    name: 'MVs',
    component: () => import('../views/MVs/index.vue'),
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums/index.vue'),
  },
  // {
  //   path: '/detail/sheet',
  //   name: 'DetailSheet',
  //   component: () => import('../views/Detail/Sheet/SheetDetail.vue'),
  //   meta: {
  //     hidePlaybar: true
  //   }
  // },
  // {
  //   path: '/detail/mv',
  //   name: 'DetailMV',
  //   component: () => import('../views/Detail/MV/MVDetail.vue'),
  //   meta: {
  //     hidePlaybar: true
  //   }
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About/index.vue'),
  //   meta: {
  //     hidePlaybar: true
  //   }
  // },
]

const router = new VueRouter({
  routes
})

export default router
