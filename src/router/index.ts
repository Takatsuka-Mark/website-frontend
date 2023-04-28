import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import Error404View from '../views/Error404View/Error404View.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      // TODO determine if we should redirect here
      path: '/:catchAll(.*)',
      name: 'Error',
      component: Error404View
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  }
})

export default router
