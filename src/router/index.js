import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import ErrorPage from '@/pages/Error/ErrorPage.vue';
// import Construction from '@/pages/Construction/Construction.vue';
import MathInterpreter from '@/pages/Projects/MathInterpreter/MathInterpreter.vue';
import Home from '@/pages/Home/Home.vue';

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
