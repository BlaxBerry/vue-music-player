import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    //重定向
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/List.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/mv',
    name: 'MV',
    component: () => import('../views/MV.vue')
  },
  {
    // MV 详情
    path: '/detail',
    name: 'Detail',
    component: () =>
    import ('../views/Detail.vue')
  },
  {
    // album 详情
    path: '/album',
    name: 'Album',
    component: () =>
    import ('../views/Album.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
