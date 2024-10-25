<template>
  <div class="space-invaders">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles" class="space-invaders-header">
      <a href="https://project30.itch.io/space-invaders-clone" target="_blank">Space Invaders Clone</a>
    </h2>
    <h3>Personal Project <br> 2024</h3>
    <p><i>A classic arcade game.</i></p>
    <p>I made a clone of Space Invaders using the Godot Engine.</p>
    <div class="skills">
      <span class="pill">GDScript</span>
      <span class="pill">Godot 4</span>
      <span class="pill">Aseprite</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpaceInvaders',
  methods: {
    unfoldTiles() {
      document.documentElement.style.setProperty('--tile-1-color', 'rgba(0, 0, 255, 0.7)'); // Blue
      document.documentElement.style.setProperty('--tile-2-color', 'rgba(0, 255, 0, 0.7)'); // Green
      document.documentElement.style.setProperty('--tile-3-color', 'rgba(255, 0, 0, 0.7)'); // Red
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
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.space-invaders-header {
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  color: #000;
  padding-top: 20px;
  text-align: left;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 2px 2px #4a4a4a;
}

.space-invaders-header a {
  text-decoration: none;
  color: #000;
}

/* Optional: Add some animation for a retro effect */
@keyframes flicker {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
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
