import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Layout from '@/components/Layout/Layout.vue';
// import LandingPage from '@/pages/LandingPage/LandingPage.vue';
import ErrorPage from '@/pages/Error/ErrorPage.vue';
// import PersonalStats from '@/pages/PersonalStats/PersonalStats.vue';
import Construction from '@/pages/Construction/Construction.vue';
import Education from '@/pages/AboutMe/Education/Education/Education.vue';
import Overview from '@/pages/AboutMe/Overview/Overview.vue';
import MathInterpreter2 from '@/pages/Projects/MathInterpreter2/MathInterpreter2.vue';
import TestPage from '@/pages/TestPage/TestPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      // {
      //   path: 'landing_page',
      //   name: 'LandingPage',
      //   component: LandingPage,
      // },
      // {
      //   path: 'personal_stats',
      //   name: 'PersonalStats',
      //   component: PersonalStats,
      // },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
      },
      {
        path: 'education',
        name: 'Education',
        component: Education,
      },
      {
        path: 'construction',
        name: 'Construction',
        component: Construction,
      },
      {
        path: 'math',
        name: 'MathInterpreter',
        component: MathInterpreter2,
      },
      {
        path: 'test',
        name: 'TestPage',
        component: TestPage,
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
  mode: 'history',
  routes,
});

export default router;
