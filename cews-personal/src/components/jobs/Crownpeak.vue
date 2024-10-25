<template>
  <div class="crownpeak">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles">
      <a href="https://www.crownpeak.com/" target="_blank" class="crownpeak-header">crownpeak</a>
    </h2>
    <h3>Software Engineer <br> 2017-2019</h3>
    <p><i>Crownpeak is an enterprise content management system.</i></p>
    <p>I was a full stack developer on the core product, where I built and maintained features for the SaaS platform.</p>
    <div class="skills">
      <span class="pill">.NET</span>
      <span class="pill">AngularJS</span>
      <span class="pill">Angular</span>
    </div>
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
      document.querySelectorAll('.tile').forEach(tile => {
        tile.style.transform = 'scaleX(1)';
        tile.style.width = '20px';  // Adjust this value as needed
        tile.style.left = tile.classList.contains('tile-2') ? 'auto' : '0';
        tile.style.right = tile.classList.contains('tile-2') ? '0' : 'auto';
      });
    },
    foldTiles() {
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(0)');
    }
  }
}
</script>

<style scoped>
.crownpeak-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #4e2ae8;;
  border-radius: 4px;
  text-transform: lowercase;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.crownpeak-header .k {
  letter-spacing: -2px;
  margin-left: -1px;
  font-weight: 600;
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
