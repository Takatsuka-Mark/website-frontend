import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Layout from '@/components/Layout/Layout.vue';
import LandingPage from '@/pages/LandingPage/LandingPage.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'landing_page',
        name: 'LandingPage',
        component: LandingPage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
