import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Layout from '@/components/Layout/Layout.vue';
import LandingPage from '@/pages/LandingPage/LandingPage.vue';
import ErrorPage from '@/pages/Error/ErrorPage.vue';
import PersonalStats from '@/pages/PersonalStats/PersonalStats.vue';
import AboutMe from '@/pages/AboutMe/AboutMe.vue';

Vue.use(VueRouter);

const routes = [
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
      {
        path: 'personal_stats',
        name: 'PersonalStats',
        component: PersonalStats,
      },
      {
        path: 'about_me',
        name: 'AboutMe',
        component: AboutMe,
      },
    ],
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
