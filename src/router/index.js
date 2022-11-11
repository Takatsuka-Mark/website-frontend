import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import ErrorPage from '@/pages/Error/ErrorPage.vue';
// import Construction from '@/pages/Construction/Construction.vue';
import MathInterpreter from '@/pages/Projects/MathInterpreter/MathInterpreter.vue';
import Home from '@/pages/Home/Home.vue';
import Resume from '@/pages/Resume/Resume.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'math',
        name: 'MathInterpreter',
        component: MathInterpreter,
      },
      {
        path: 'Home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'resume',
        name: 'Resume',
        component: Resume,
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
  // TODO may want to allow center
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
