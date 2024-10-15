import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList.vue'
import AddTodo from '../components/AddTodo.vue'

const routes = [
  { path: '/', component: TodoList },
  { path: '/add', component: AddTodo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
