<template>
  <div id="app">
    <header class="main-header">
      <h1>
        <span v-for="(letter, index) in nameArray" :key="index" :style="{ animationDelay: `${index * 50}ms` }">
          {{ letter }}
        </span>
      </h1>
    </header>
    <div class="layout">
      <Navbar class="navbar" />
      <main class="content-wrapper">
        <div class="content">
          <transition name="fade-scale" mode="out-in">
            <router-view :key="$route.fullPath"></router-view>
          </transition>
        </div>
      </main>
    </div>
    <div class="tile-container">
      <div class="tile tile-1"></div>
      <div class="tile tile-2"></div>
      <div class="tile tile-3"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      name: 'Eric Wahlgren-Sauro'
    }
  },
  computed: {
    nameArray() {
      return this.name.split('');
    }
  },
  mounted() {
    // Trigger reflow to ensure animation runs
    this.$nextTick(() => {
      document.body.offsetHeight;
    });
  }
}
</script>

<style>
:root {
  --bg-primary: white;
  --bg-secondary: white;
  --transition-time: 0.3s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.tile-1 { background-color: var(--tile-1-color, transparent); }
.tile-2 { background-color: var(--tile-2-color, transparent); }
.tile-3 { background-color: var(--tile-3-color, transparent); }

.layout {
  display: flex;
  min-height: calc(100vh - 80px); /* Adjust based on new header height */
}

.navbar {
  width: 200px;
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 20px; /* Add some space between header and navbar */
}

.content-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align content to top */
  padding: 20px;
  padding-top: 40px; /* Add more top padding to content */
}

.content {
  max-width: 800px;
  width: 100%;
  position: relative;
  min-height: 400px; /* Adjust this value based on your content */
}

/* Fade and scale transition */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Add this new style for headers */
h1, h2, h3, h4, h5, h6 {
  transition: color var(--transition-time) ease;
}

.tile-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.tile {
  position: absolute;
  width: 100%;
  height: 33.33%;
  transform: scaleX(0);
  transition: transform 0.5s ease-out;
}

.tile-1 { top: 0; transform-origin: left; }
.tile-2 { top: 33.33%; transform-origin: right; }
.tile-3 { top: 66.66%; transform-origin: left; }

.main-header {
  text-align: left;
  padding: 20px 0 20px 40px; /* Top, Right, Bottom, Left */
  background-color: #f8f8f8; /* Optional: adds a subtle background */
}

.main-header h1 {
  margin: 0;
  font-size: 2.5rem; /* Increase font size */
  font-weight: 300; /* Optional: makes the font a bit lighter */
}

.main-header h1 span {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.main-header h1 span:nth-child(5) {
  margin-right: 0.25em; /* Add space after "Eric" */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
