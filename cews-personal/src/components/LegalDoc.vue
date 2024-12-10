<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const content = ref('')
const route = useRoute()

const docs = {
  'youtube-notes-privacy-policy': () => fetch('/src/docs/youtube-notes-privacy-policy.md').then(res => res.text())
}

onMounted(async () => {
  const docLoader = docs[route.params.docName as keyof typeof docs]
  if (!docLoader) {
    throw new Error(`Document not found: ${route.params.docName}`)
  }
  const text = await docLoader()
  content.value = await marked(text)
})
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <article 
      class="prose dark:prose-invert" 
      v-html="content"
    />
  </div>
</template>