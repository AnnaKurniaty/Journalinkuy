import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import journal from '../views/dashboards/analytics/Journals.vue'
import timelines from '../pages/timeline.vue'
import login from '../pages/index.vue'
import dashboard from '../pages/dashboard.vue'
import EditJournal from '../pages/editJournal.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    ...setupLayouts(routes),
    //  {
    //    path: '/journal',
    //    name: 'journal',
    //    component: journal
    // },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditJournal
    },
    {
      path: '/timeline/addTimeline',
      name: 'addTimeline',
      component: timelines
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});
export default router
