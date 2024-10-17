<template>
  <div class="jumpcloud">
    <h2 @mouseover="unfoldTiles" @mouseleave="foldTiles">
      <a href="https://jumpcloud.com/" target="_blank">JumpCloud</a>
    </h2>
    <h3>Senior Software Engineer</h3>
    <p>JumpCloud is a cloud-based directory and access management platform.</p>
    <p>I worked on the Growth team, which is responsible for enitre monetization strategy and implementation.</p>
  </div>
</template>

<script>
export default {
  name: 'JumpCloud',
  methods: {
    unfoldTiles() {
      document.documentElement.style.setProperty('--tile-1-color', 'rgba(0, 128, 128, 0.5)');
      document.documentElement.style.setProperty('--tile-2-color', 'rgba(0, 164, 164, 0.5)');
      document.documentElement.style.setProperty('--tile-3-color', 'rgba(255, 255, 0, 0.5)');
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(1)');
    },
    foldTiles() {
      document.querySelectorAll('.tile').forEach(tile => tile.style.transform = 'scaleX(0)');
    }
  }
}
</script>
