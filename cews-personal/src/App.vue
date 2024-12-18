<template>
  <div id="app">
    <header class="main-header sticky">
      <router-link to="/" class="header-link">
        <h1>
          {{ name }}
        </h1>
      </router-link>
      <h2 class="main-header-subtitle">
        Software Engineer
      </h2>
      <Socials class="header-socials" />
    </header>
    <div class="layout">
      <Navbar class="navbar" />
      <main class="content-wrapper">
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" :key="$route.fullPath" />
            </transition>
          </router-view>  
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
import Socials from './components/Socials.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Socials
  },
  data() {
    return {
      name: 'Eric Wahlgren-Sauro'
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
  height: calc(100vh - 200px); /* Change min-height to height */
  z-index: 0;
}

.content-wrapper {
  flex-grow: 1;
  display: flex;
  margin-left: calc(20px + 2%);
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.header-link {
  text-decoration: none;
  color: inherit;
}

.content {
  max-width: 800px;
  width: 100%;
  position: relative;
  height: auto;
}


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
  z-index: 2000; /* Increased from -1 to be above header */
}

/* Add this media query to hide tiles on mobile */
@media screen and (max-width: 768px) {
  .tile-container {
    display: none;
  }
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
  margin: 0;
  padding: 60px 0 20px calc(20px + 2%);
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
}

.main-header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.main-header h1 span {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.main-header h1 span:nth-child(5) {
  margin-right: 0.25em;
}

.main-header-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 0.5rem;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Add these responsive styles */
@media screen and (max-width: 768px) {
  .content-wrapper {
    padding-top: 20px;
    padding-bottom: 60px;
  }

  .main-header {
    padding: 30px 20px;
  }

  .main-header h1 {
    font-size: 1.8rem;
  }

  .header-socials {
    margin-top: 0.5rem;
  }

  .main-header-subtitle {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .main-header h1 {
    font-size: 1.5rem;
  }

  .main-header {
    padding-top: 20px;
  }
}
</style>
