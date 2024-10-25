<template>
  <div class="jumpcloud">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles">
      <a href="https://jumpcloud.com/" target="_blank" class="jumpcloud-header">JumpCloud</a>
    </h2>
    <h3>Senior Software Engineer <br> 2019-2024</h3>
    <p><i>JumpCloud provides a comprehensive IT management platform, similar to how Salesforce serves as a central hub for customer relationship management.</i></p>
    <p>On the Growth team, I helped develop and implement our entire monetization strategy within the platform.</p>
    <div class="skills">
      <span class="pill">Vue.js</span>
      <span class="pill">Node.js</span>
      <span class="pill">MongoDB</span>
      <span class="pill">Scrum Master</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumpCloud',
  methods: {
    unfoldTiles() {
      document.documentElement.style.setProperty('--tile-1-color', 'rgba(26, 43, 60, 0.5)');
      document.documentElement.style.setProperty('--tile-2-color', 'rgba(0, 182, 189, 0.5)');
      document.documentElement.style.setProperty('--tile-3-color', 'rgba(255, 153, 0, 0.5)');
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
.jumpcloud-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #1a2b3c;
  letter-spacing: -0.5px;
  text-transform: lowercase;
  text-decoration: none;
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
