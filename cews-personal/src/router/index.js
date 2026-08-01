import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import AboutMe from '../views/AboutMe.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/work', name: 'Work', component: Work },
  { path: '/now', name: 'Now', component: () => import('../views/Now.vue') },
  { path: '/reading', name: 'Reading', component: () => import('../views/Reading.vue') },
  { path: '/about', name: 'AboutMe', component: AboutMe },
  { path: '/contact', name: 'ContactForm', component: ContactForm },
  { path: '/legal', component: () => import('../views/Legal.vue') },
  { path: '/legal/:docName', component: () => import('../components/LegalDoc.vue') },

  // Old URLs stay working. /jobs is gone; its content now sits on /about.
  { path: '/projects', redirect: '/work' },
  { path: '/jobs', redirect: '/about' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
