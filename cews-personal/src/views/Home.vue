<template>
  <div class="home">
    <p class="home__thesis">
      I decide what to build, then build it.
    </p>

    <section class="home__section" aria-labelledby="latest">
      <h2 id="latest" class="eyebrow">Latest in the register</h2>
      <ul class="latest">
        <li v-for="item in latest" :key="item.to + item.title" class="latest__row">
          <span class="meta latest__date">{{ item.dates }}</span>
          <router-link :to="item.to" class="latest__title">{{ item.title }}</router-link>
          <span class="meta latest__kind">{{ item.kind }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { work } from '../content/work.js'
import { slugify } from '../content/slug.js'

/**
 * The front page of the record. Each row links to its own anchor so /work
 * opens on the entry that was clicked rather than at the top.
 */
const latest = computed(() =>
  work.map(w => ({
    title: w.title, dates: w.dates, kind: w.status, to: `/work#${slugify(w.title)}`
  }))
)
</script>

<style scoped>
.home__thesis {
  font-family: var(--font-prose);
  font-size: var(--step-2);
  line-height: 1.35;
  color: var(--ink);
  max-width: 26ch;
  margin-bottom: var(--gap-xl);
  text-wrap: balance;
}

.home__section { border-top: 1px solid var(--rule); padding-top: var(--gap-m); }

.latest {
  list-style: none;
  margin: 0;
  padding: 0;
}

.latest__row {
  display: grid;
  grid-template-columns: var(--rail) 1fr auto;
  gap: var(--gap-m);
  align-items: baseline;
  padding: var(--gap-s) 0;
  border-bottom: 1px solid var(--rule);
}

.latest__title {
  font-family: var(--font-display);
  color: var(--ink);
  border-bottom: 0;
  overflow-wrap: anywhere;
}

.latest__title:hover { color: var(--accent); }

@media (max-width: 40rem) {
  .latest__row {
    grid-template-columns: 1fr auto;
    gap: var(--gap-xs) var(--gap-s);
  }

  .latest__date { grid-column: 1 / -1; }
}
</style>
