import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Jobs from '../views/Jobs.vue'
import AboutMe from '../views/AboutMe.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/contact',
    name: 'ContactForm',
    component: ContactForm
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
