<template>
  <div class="podclub">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles" class="podclub-header">
      <a href="https://podclub.io" target="_blank">podclub.</a>
    </h2>
    <h3>Co-Creator <br> 2019-present</h3>
    <p><i>A platform that allows users to self-organize into groups and discuss podcasts of all types.</i></p>
    <p>
      I co-created the platform with a friend, where I was responsible for coming up with the idea and breaking it down into manageable pieces.
      I've helped run the platform since launch.
    </p>
    <div class="skills">
      <span class="pill">Project Management</span>
      <span class="pill">Vue.js</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const unfoldTiles = () => {
  document.documentElement.style.setProperty('--tile-1-color', 'rgba(0, 128, 0, 0.5)')
  document.documentElement.style.setProperty('--tile-2-color', 'rgba(0, 64, 0, 0.5)')
  document.documentElement.style.setProperty('--tile-3-color', 'rgba(0, 0, 0, 0.5)')
  
  document.querySelectorAll('.tile').forEach(tile => {
    const el = tile as HTMLElement
    el.style.transform = 'scaleX(1)'
    el.style.width = '20px'
    el.style.left = el.classList.contains('tile-2') ? 'auto' : '0'
    el.style.right = el.classList.contains('tile-2') ? '0' : 'auto'
  })
}

const foldTiles = () => {
  document.querySelectorAll('.tile').forEach(tile => 
    (tile as HTMLElement).style.transform = 'scaleX(0)'
  )
}
</script>

<style scoped>
.podclub-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: lowercase;
  margin-bottom: 0;
  line-height: 1;
}

.podclub-header a {
  text-decoration: none;
  color: #000;
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
</style>