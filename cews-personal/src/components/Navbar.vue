<template>
  <nav class="navbar" :class="{ 'navbar-bottom': isBottomNav }">
    <ul>
      <li class="navbar-item">
        <router-link to="/about" exact-active-class="active">About Me</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/jobs" exact-active-class="active">Employment</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/projects" exact-active-class="active">Projects</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/contact" exact-active-class="active">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isBottomNav = ref(false)

const checkScreenSize = () => {
  isBottomNav.value = window.innerWidth <= 1240
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  left: calc(20px + 2%);
  top: 50%;
  transform: translateY(-50%);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navbar-item {
  margin-bottom: 10px;
}

.navbar-item a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block;
  font-size: 16px;
}

.navbar-item a.active {
  background-color: #000;
  color: white;
}

.navbar-item a:hover:not(.active) {
  background-color: #f5f5f5;
}

@media (max-width: 1240px) {
  .navbar-bottom {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    padding: 10px 0;
    background-color: #fff;
    box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  .navbar-bottom ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .navbar-bottom .navbar-item {
    margin-bottom: 0;
    flex: 1;
    text-align: center;
  }

  .navbar-bottom .navbar-item a {
    font-size: 14px;
    padding: 10px 5px;
    white-space: nowrap;
    display: block;
  }

  .navbar-bottom .navbar-item:first-child a {
    padding-left: 20px;
  }

  .navbar-bottom .navbar-item:last-child a {
    padding-right: 20px;
  }
}
</style>