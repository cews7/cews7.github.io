<template>
    <div class="stellabounce">
      <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles" class="stellabounce-header">
        <a href="https://project30.itch.io/stellabounce" target="_blank">Stellabounce</a>
      </h2>
      <h3>Personal Project <br> 2024</h3>
      <p><i>A game about bouncing to reach the stars.</i></p>
      <p>I made a prototype of a puzzle game using the Godot Engine. I might come back to this later.</p>
      <div class="skills">
        <span class="pill">GDScript</span>
        <span class="pill">Godot 4</span>
        <span class="pill">Vector Art</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Stellabounce',
    methods: {
      unfoldTiles() {
        document.documentElement.style.setProperty('--tile-1-color', 'rgba(0, 255, 255, 0.7)'); // Teal
        document.documentElement.style.setProperty('--tile-2-color', 'rgba(47, 47, 47, 0.7)'); // Dark grey
        document.documentElement.style.setProperty('--tile-3-color', 'rgba(0, 128, 255, 0.7)'); // Complementary blue
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
  
  .stellabounce-header {
    font-family: 'Press Start 2P', monospace;
    font-size: 2rem;
    color: #000;
    padding-top: 20px;
    text-align: left;
    letter-spacing: 2px;
    text-transform: uppercase;
    position: relative;
    text-shadow: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }
  
  .stellabounce-header a {
    text-decoration: none;
    color: #00ffff;
    -webkit-text-stroke: 1px #000;
    transform: skew(-15deg);
    display: inline-block;
    position: relative;
    
    /* Updated gradient for a more edgy look */
    background: repeating-linear-gradient(
      -45deg,
      #00ffff,
      #00ffff 3px,
      #008b8b 3px,
      #008b8b 6px
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    /* Add a clip-path for edgy corners */
    clip-path: polygon(
      0 10%,      /* top left */
      100% 0,     /* top right */
      95% 100%,   /* bottom right */
      5% 90%      /* bottom left */
    );
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
  