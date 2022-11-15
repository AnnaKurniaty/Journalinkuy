import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import journal from '../views/dashboards/analytics/Journal1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    ...setupLayouts(routes),
    {
      path: '/',
      name: 'journal',
      component: journal
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
