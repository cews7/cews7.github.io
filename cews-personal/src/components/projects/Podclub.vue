<template>
  <div class="podclub">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles">
      <a href="https://podclub.io" target="_blank">Podclub</a>
    </h2>
    <h3>co-creator</h3>
    <p>A simple platform that allows users to self-organize into groups and discuss podcasts.</p>
  </div>
</template>

<script>
export default {
  name: 'Podclub',
  methods: {
    unfoldTiles() {
      document.documentElement.style.setProperty('--tile-1-color', 'rgba(0, 128, 0, 0.5)');
      document.documentElement.style.setProperty('--tile-2-color', 'rgba(0, 64, 0, 0.5)');
      document.documentElement.style.setProperty('--tile-3-color', 'rgba(0, 0, 0, 0.5)');
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(1)');
    },
    foldTiles() {
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(0)');
    }
  }
}
</script>
