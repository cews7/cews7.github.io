<script setup>
const legalDocs = [
  { title: 'YouTube Notes Privacy Policy', path: '/legal/youtube-notes-privacy-policy' }
]
</script>

<template>
  <div class="legal">
    <h1 class="page-heading">Legal</h1>
    <ul class="legal__list">
      <li v-for="doc in legalDocs" :key="doc.path">
        <router-link :to="doc.path">{{ doc.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page-heading { font-size: var(--step-3); margin-bottom: var(--gap-l); }

.legal__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.legal__list li {
  padding: var(--gap-s) 0;
  border-bottom: 1px solid var(--rule);
}
</style>
