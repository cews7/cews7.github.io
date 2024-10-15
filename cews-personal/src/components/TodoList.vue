<template>
  <div>
    <h2>Todo List</h2>
    <div class="todo-grid">
      <div v-for="todo in paginatedTodos" :key="todo.id" class="todo-card">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)" class="delete-btn">🗑️</button>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from '../store/todo'

const todoStore = useTodoStore()
const currentPage = ref(1)
const todosPerPage = 5

const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * todosPerPage
  const end = start + todosPerPage
  return todoStore.getTodos.slice(start, end)
})

const totalPages = computed(() => Math.ceil(todoStore.getTodos.length / todosPerPage))

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const removeTodo = (id) => {
  todoStore.removeTodo(id)
}
</script>

<style scoped>
.todo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.todo-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.todo-card:hover {
  background-color: #f0f0f0;
}

.delete-btn {
  float: right;
  background: none;
  border: none;
  cursor: pointer;
}

.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
