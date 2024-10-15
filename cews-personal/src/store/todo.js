import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    newTodoNotification: false,
  }),
  actions: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        createdAt: new Date(),
      })
      this.newTodoNotification = true
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    clearNotification() {
      this.newTodoNotification = false
    }
  },
  getters: {
    getTodos: (state) => state.todos,
    getNotificationStatus: (state) => state.newTodoNotification,
  }
})
