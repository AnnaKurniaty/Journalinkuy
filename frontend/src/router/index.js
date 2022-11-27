import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import journal from '../views/dashboards/analytics/Journals.vue'
import EditJournal from '../pages/editJournal.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    ...setupLayouts(routes),
    {
      path: '/',
      name: 'journal',
      component: journal
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditJournal
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
