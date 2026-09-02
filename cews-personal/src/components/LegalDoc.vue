<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const content = ref('')
const error = ref('')
const route = useRoute()

const docs = {
  'youtube-notes-privacy-policy': () => fetch('/docs/youtube-notes-privacy-policy.md').then(res => res.text())
}

onMounted(async () => {
  const docLoader = docs[route.params.docName]
  if (!docLoader) {
    error.value = 'That document does not exist.'
    return
  }
  content.value = marked.parse(await docLoader())
})
</script>

<template>
  <div class="legal-doc">
    <router-link to="/legal" class="meta legal-doc__back">← Legal</router-link>
    <p v-if="error" class="prose">
      {{ error }} <router-link to="/legal">See what is available</router-link>.
    </p>
    <article v-else class="legal-doc__body" v-html="content"></article>
  </div>
</template>

<style scoped>
.legal-doc { max-width: var(--measure); }

.legal-doc__back {
  display: inline-block;
  border-bottom: 0;
  margin-bottom: var(--gap-l);
}

.legal-doc__back:hover { color: var(--ink); }

.legal-doc__body { font-family: var(--font-prose); color: var(--ink-soft); }

.legal-doc__body :deep(h1) { font-size: var(--step-2); margin-bottom: var(--gap-m); }
.legal-doc__body :deep(h2) { font-size: var(--step-1); margin: var(--gap-l) 0 var(--gap-s); }
.legal-doc__body :deep(p),
.legal-doc__body :deep(ul) { margin-bottom: var(--gap-m); }
</style>
