<template>
  <div class="now">
    <h1 class="page-heading">Current focus</h1>
    <p class="page-intro">
      What has my attention, and what I currently believe about where things go.
      Positions stay on the page after they turn out wrong.
    </p>

    <section class="focus" aria-labelledby="focus-now">
      <h2 id="focus-now" class="eyebrow">Right now · updated {{ focus.updated }}</h2>
      <p class="lede">{{ focus.body }}</p>
    </section>

    <hr class="rule" />

    <h2 class="eyebrow">Positions</h2>

    <article v-for="p in positions" :key="p.claim" class="position">
      <div class="position__rail">
        <span class="meta">{{ p.dates }}</span>
        <span class="meta" :class="p.status === 'active' ? 'meta--live' : 'meta--past'">
          {{ p.status }}
        </span>
      </div>

      <div class="position__body">
        <h3 class="position__claim">{{ p.claim }}</h3>
        <p class="prose">{{ p.reasoning }}</p>

        <!-- Kept, not deleted. This block is what makes the page worth reading. -->
        <p v-if="p.outcome" class="position__outcome">
          <span class="eyebrow">What happened · revised {{ p.revised }}</span>
          {{ p.outcome }}
        </p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { positions, focus } from '../content/positions.js'
</script>

<style scoped>
.page-heading { font-size: var(--step-3); margin-bottom: var(--gap-s); }
.page-intro { color: var(--ink-muted); margin-bottom: var(--gap-l); }

.focus { margin-bottom: var(--gap-l); }

.position {
  display: grid;
  grid-template-columns: var(--rail) 1fr;
  gap: 0 var(--gap-m);
  padding: var(--gap-l) 0;
  border-top: 1px solid var(--rule);
}

.position:first-of-type { border-top: 0; padding-top: var(--gap-s); }

.position__rail {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
  align-items: flex-start;
  padding-top: 0.3rem;
}

.position__claim {
  font-size: var(--step-1);
  font-weight: 600;
  margin-bottom: var(--gap-s);
  max-width: var(--measure);
}

.position__outcome {
  border-left: 2px solid var(--rule-strong);
  padding-left: var(--gap-m);
  color: var(--ink-muted);
}

@media (max-width: 40rem) {
  .position { grid-template-columns: 1fr; gap: var(--gap-s); padding: var(--gap-m) 0; }
  .position__rail { flex-direction: row; gap: var(--gap-s); padding-top: 0; }
}
</style>
