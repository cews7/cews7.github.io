<template>
  <nav class="navbar">
    <ul>
      <li class="navbar-item"><router-link to="/projects" @click="'/projects'">Projects</router-link></li>
      <li class="navbar-item"><router-link to="/jobs" @click.native="'/jobs'">Employment</router-link></li>
      <li class="navbar-item"><router-link to="/about" @click="'/about'">About Me</router-link></li>
      <li class="navbar-item"><router-link to="/contact" @click="'/contact'">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
/* Add navbar styles here */
.navbar {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.navbar-item {
  margin-bottom: 10px;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
