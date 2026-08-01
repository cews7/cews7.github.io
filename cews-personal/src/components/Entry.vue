<template>
  <article class="entry">
    <div class="entry__rail">
      <span class="meta">{{ dates }}</span>
      <span v-if="status" class="meta" :class="statusClass">{{ status }}</span>
    </div>

    <div class="entry__body">
      <h2 class="entry__title">
        <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h2>

      <p v-if="role" class="entry__role meta">{{ role }}</p>

      <div class="entry__prose prose">
        <slot />
      </div>

      <ul v-if="tags?.length" class="tag-row">
        <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title:  { type: String, required: true },
  href:   { type: String, default: '' },
  role:   { type: String, default: '' },
  dates:  { type: String, required: true },
  /** The register marks state. See work.js / reading.js for each section's set. */
  status: { type: String, default: '' },
  tags:   { type: Array, default: () => [] }
})

/** Statuses that mean "ongoing" get the accent; everything else reads as past. */
const LIVE = new Set(['active', 'reading'])
const statusClass = computed(() => (LIVE.has(props.status) ? 'meta--live' : 'meta--past'))
</script>

<style scoped>
.entry {
  display: grid;
  grid-template-columns: var(--rail) 1fr;
  gap: 0 var(--gap-m);
  padding: var(--gap-l) 0;
  border-top: 1px solid var(--rule);
}

.entry:first-child { border-top: 0; padding-top: var(--gap-s); }

/* The rail: dates and status pinned into the left margin, mono, stacked. */
.entry__rail {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
  align-items: flex-start;
  padding-top: 0.35rem;
}

.entry__title {
  font-size: var(--step-2);
  font-weight: 600;
}

.entry__title a {
  color: var(--ink);
  border-bottom: 1px solid var(--rule-strong);
}

.entry__title a:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.entry__role {
  margin: var(--gap-xs) 0 var(--gap-s);
  display: block;
}

/* Below the rail breakpoint the metadata sits inline above the title. */
@media (max-width: 40rem) {
  .entry {
    grid-template-columns: 1fr;
    gap: var(--gap-s);
    padding: var(--gap-m) 0;
  }

  .entry__rail {
    flex-direction: row;
    gap: var(--gap-s);
    padding-top: 0;
  }
}
</style>
