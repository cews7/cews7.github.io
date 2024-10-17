<template>
  <div class="crownpeak">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles">
      <a href="https://www.crownpeak.com/" target="_blank">Crownpeak</a>
    </h2>
    <h3>Software Engineer</h3>
    <p>Crownpeak is a software company that specializes in content management systems.</p> 
    <!-- Add Crownpeak job details here -->
  </div>
</template>

<script>
export default {
  name: 'Crownpeak',
  methods: {
    unfoldTiles() {
      document.documentElement.style.setProperty('--tile-1-color', 'rgba(128, 0, 128, 0.5)');
      document.documentElement.style.setProperty('--tile-2-color', 'rgba(64, 0, 164, 0.5)');
      document.documentElement.style.setProperty('--tile-3-color', 'rgba(0, 0, 200, 0.5)');
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(1)');
    },
    foldTiles() {
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(0)');
    }
  }
}
</script>
