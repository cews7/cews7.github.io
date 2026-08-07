<template>
  <nav class="nav" aria-label="Sections">
    <ul class="nav__list">
      <li v-for="item in sections" :key="item.to">
        <router-link :to="item.to" active-class="is-current">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const sections = [
  { to: '/work',       label: 'work' },
  { to: '/about',      label: 'about' },
  { to: '/contact',    label: 'contact' }
]
</script>

<style scoped>
.nav__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-s) var(--gap-m);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__list a {
  font-family: var(--font-meta);
  font-size: var(--step--1);
  letter-spacing: 0.04em;
  color: var(--ink-muted);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
}

.nav__list a:hover { color: var(--ink); }

/* Current section is marked in the register, not highlighted with a chip. */
.nav__list a.is-current {
  color: var(--ink);
  border-bottom-color: var(--accent);
}

@media (max-width: 40rem) {
  .nav__list { gap: var(--gap-xs) var(--gap-s); }
}
</style>
