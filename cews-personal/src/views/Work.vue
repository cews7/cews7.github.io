<template>
  <div class="work">
    <h1 class="page-heading">Work</h1>
    <p class="page-intro">
      Things I've built, newest first. Status says where each one actually stands.
    </p>

    <Entry
      v-for="item in work"
      :key="item.title"
      :title="item.title"
      :href="item.href"
      :role="item.role"
      :dates="item.dates"
      :status="item.status"
      :tags="item.tags"
    >
      <p class="lede">{{ item.summary }}</p>
      <p v-if="item.detail">{{ item.detail }}</p>
    </Entry>
  </div>
</template>

<script setup>
import Entry from '../components/Entry.vue'
import { work } from '../content/work.js'
</script>

<style scoped>
.page-heading {
  font-size: var(--step-3);
  margin-bottom: var(--gap-s);
}

.page-intro {
  color: var(--ink-muted);
  margin-bottom: var(--gap-l);
}
</style>
