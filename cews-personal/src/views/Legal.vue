<script setup lang="ts">
const legalDocs = [
  {
    title: 'YouTube Notes Privacy Policy',
    path: '/legal/youtube-notes-privacy-policy'
  }
]
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <h1 class="text-2xl font-bold mb-4">Legal Documents</h1>
    <ul>
      <li v-for="doc in legalDocs" :key="doc.path">
        <router-link :to="doc.path" class="text-blue-500 hover:underline">
          {{ doc.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>