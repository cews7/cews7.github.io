<template>
  <nav class="navbar">
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
    <div class="socials-wrapper">
      <Socials />
    </div>
  </nav>
</template>

<script>
import Socials from './Socials.vue'

export default {
  name: 'Navbar',
  components: {
    Socials
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
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
  color: #1a2b3c; /* JumpCloud dark blue */
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block; /* Ensure the entire area is clickable */
}

.navbar-item a.active {
  background-color: #070706; /* Bright orange */
  color: white;
}

.navbar-item a:hover:not(.active) {
  background-color: #f5f6f7; /* JumpCloud light gray */
}

.socials-wrapper {
  padding-top: 20px;
}
</style>
