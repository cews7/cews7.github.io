import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import AboutMe from '../views/AboutMe.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/work', name: 'Work', component: Work },
  { path: '/about', name: 'AboutMe', component: AboutMe },
  { path: '/contact', name: 'ContactForm', component: ContactForm },
  { path: '/legal', component: () => import('../views/Legal.vue') },
  { path: '/legal/:docName', component: () => import('../components/LegalDoc.vue') },

  // Old URLs stay working. /jobs is gone; its content now sits on /about.
  { path: '/projects', redirect: '/work' },
  { path: '/jobs', redirect: '/about' },
  { path: '/now', redirect: '/work' },

  // Anything else renders a real page rather than a blank router-view.
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

/** The page transition in App.vue runs 220ms with mode="out-in", so the
 *  incoming view is not mounted yet when scrollBehavior fires. Wait it out
 *  before looking for the anchor, or the scroll silently does nothing. */
const TRANSITION_MS = 260

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (!to.hash) return { top: 0 }

    return new Promise(resolve => {
      setTimeout(() => resolve({
        el: to.hash,
        top: 16,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
      }), TRANSITION_MS)
    })
  }
})

export default router
