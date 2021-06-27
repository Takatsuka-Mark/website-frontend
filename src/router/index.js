import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Layout from '@/components/Layout/Layout.vue';
// import LandingPage from '@/pages/LandingPage/LandingPage.vue';
import ErrorPage from '@/pages/Error/ErrorPage.vue';
// import PersonalStats from '@/pages/PersonalStats/PersonalStats.vue';
import Resume from '@/pages/AboutMe/Resume/Resume.vue';
import Construction from '@/pages/Construction/Construction.vue';
import Education from '@/pages/AboutMe/Education/Education/Education.vue';
import Overview from '@/pages/AboutMe/Overview/Overview.vue';
import MathInterpreter from '@/pages/Projects/MathInterpreter/MathInterpreter.vue';
import TestPage from '@/pages/TestPage/TestPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/app',
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
        path: 'resume',
        name: 'Resume',
        component: Resume,
      },
      {
        path: 'construction',
        name: 'Construction',
        component: Construction,
      },
      {
        path: 'math',
        name: 'MathInterpreter',
        component: MathInterpreter,
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
  mode: 'hash',
  routes,
});

export default router;
