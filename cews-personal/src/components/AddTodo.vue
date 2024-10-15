<template>
  <div>
    <h2>Add Todo</h2>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Enter a new todo" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todo'

const todoStore = useTodoStore()
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>
