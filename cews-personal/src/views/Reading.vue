<template>
  <div class="reading">
    <h1 class="page-heading">Reading</h1>
    <p class="page-intro">
      Not everything I read — only the ones I had something to say about.
    </p>

    <Entry
      v-for="book in reading"
      :key="book.title"
      :title="book.title"
      :role="book.author"
      :dates="book.dates"
      :status="book.status"
    >
      <p>{{ book.note }}</p>
    </Entry>
  </div>
</template>

<script setup>
import Entry from '../components/Entry.vue'
import { reading } from '../content/reading.js'
</script>

<style scoped>
.page-heading { font-size: var(--step-3); margin-bottom: var(--gap-s); }
.page-intro { color: var(--ink-muted); margin-bottom: var(--gap-l); }
</style>
