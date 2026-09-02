<template>
  <div id="app">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="masthead">
      <div class="masthead__inner">
        <router-link to="/" class="masthead__name">{{ name }}</router-link>
        <Navbar />
      </div>
    </header>

    <main id="main" class="shell">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>

    <footer class="footer shell">
      <hr class="rule" />
      <div class="footer__inner">
        <span class="meta">Last revised {{ revised }}</span>
        <Socials />
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Socials from './components/Socials.vue'

const name = 'Eric Wahlgren-Sauro'
const revised = 'August 2026'
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  background: var(--ink);
  color: var(--paper);
  padding: var(--gap-s) var(--gap-m);
  z-index: 100;
}

.skip-link:focus { left: 0; }

.masthead {
  border-bottom: 1px solid var(--rule);
  background-color: var(--paper);
}

.masthead__inner {
  max-width: var(--shell);
  margin: 0 auto;
  padding: var(--gap-m) var(--gap-m) var(--gap-s);
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-s) var(--gap-m);
}

.masthead__name {
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  border-bottom: 0;
}

.masthead__name:hover { color: var(--accent); }

.shell {
  max-width: var(--shell);
  margin: 0 auto;
  padding: var(--gap-l) var(--gap-m) 0;
}

.footer {
  padding-top: 0;
  padding-bottom: var(--gap-l);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-m);
}

.fade-enter-active,
.fade-leave-active { transition: opacity 0.22s ease; }

.fade-enter-from,
.fade-leave-to { opacity: 0; }

@media (max-width: 40rem) {
  .masthead__inner { padding: var(--gap-m) var(--gap-s) var(--gap-s); }
  .shell { padding: var(--gap-m) var(--gap-s) 0; }
}
</style>
