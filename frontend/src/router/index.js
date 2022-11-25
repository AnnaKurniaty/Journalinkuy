import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import journal from '../views/dashboards/analytics/Journals.vue'
import addJournal from '../views/addJournal.vue'
import timeline from '../views/dashboards/analytics/Timeline.vue'


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
      path: '/add',
      name: 'addJournal',
      component: addJournal
    },
    {
      path: '/timeline/:id',
      name: 'timelines',
      components: timeline,
      props: true
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
