import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../components/Homepage')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/drone',
    name: 'Drone',
    component: () => import('../views/3D_Drone')
  },
  {
    path: '/math',
    name: 'Math',
    component: () => import('../views/Math')
  }
]

const router = new VueRouter({
  routes
})

export default router
