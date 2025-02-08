<template>
  <div class="youtube-notes">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles" class="youtube-notes-header">
      <a href="https://chromewebstore.google.com/detail/youtube-notes/bkpibpnngpjoecfcjjniipjlcihkknkn" target="_blank">YouTube Notes</a>
      <img src="/public/assets/youtube-notes.png" alt="YouTube Notes Chrome Extension" class="youtube-notes-logo" />
    </h2>
    <h3>Creator <br> 2024</h3>
    <p><i>A Chrome extension that allows users to take notes on YouTube videos.</i></p>
    <p>
      I created the Chrome extension that allows users to take notes on YouTube videos.
    </p>
    <div class="skills">
      <span class="pill">Vue.js</span>
      <span class="pill">UI/UX</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const tiles = ref<HTMLElement[]>([])

onMounted(() => {
  tiles.value = Array.from(document.querySelectorAll('.tile'))
})

const unfoldTiles = () => {
  document.documentElement.style.setProperty('--tile-1-color', 'rgba(255, 0, 0, 1)')
  document.documentElement.style.setProperty('--tile-2-color', 'rgba(33, 33, 33, 0.5)')
  document.documentElement.style.setProperty('--tile-3-color', 'rgba(0, 0, 0, 1)')
  
  tiles.value.forEach(tile => {
    tile.style.transform = 'scaleX(1)'
    tile.style.width = '20px'
    tile.style.left = tile.classList.contains('tile-2') ? 'auto' : '0'
    tile.style.right = tile.classList.contains('tile-2') ? '0' : 'auto'
  })
}

const foldTiles = () => {
  tiles.value.forEach(tile => 
    tile.style.transform = 'scaleX(0)'
  )
}
</script>

<style scoped>
.youtube-notes-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 0;
  line-height: 1;
}

.youtube-notes-header a {
  text-decoration: none;
  color: #ff0000;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.pill {
  background-color: #f0f0f0;
  color: #333;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
}

.youtube-notes-logo {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-left: 8px;
}
</style>