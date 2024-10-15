<template>
  <div id="app">
    <h1>Todo App</h1>
    <nav>
      <router-link to="/">Todos</router-link> |
      <router-link to="/add">Add Todo</router-link>
      <span v-if="notificationStatus" class="notification">New todo added!</span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useTodoStore } from './store/todo'

const todoStore = useTodoStore()
const notificationStatus = computed(() => todoStore.getNotificationStatus)

watch(notificationStatus, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      todoStore.clearNotification()
    }, 3000)
  }
})
</script>

<style>
.notification {
  background-color: #4CAF50;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: 10px;
}
</style>
