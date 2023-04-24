import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView/HomeView.vue'
import Error404View from '../views/Error404View/Error404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    // {
    //   path: '/',
    //   name: 'Layout',
    //   component: LayoutView,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Home',
    //       component: HomeView
    //     }
    //   ]
    // },
    {
      // TODO determine if we should redirect here
      path: '/:catchAll(.*)',
      name: 'Error',
      component: Error404View
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  }
})

export default router
