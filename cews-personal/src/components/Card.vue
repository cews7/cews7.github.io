<template>
  <div class="card" :style="{ borderColor }">
    <img :src="image" :alt="description" class="card-image">
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  description: string
  borderColor: string
}>()
</script>

<style scoped>
.card {
  border: 2px solid;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-description {
  padding: 16px;
  margin: 0;
}

@media screen and (max-width: 480px) {
  .card {
    border-width: 1px;
  }

  .card-description {
    padding: 12px;
    font-size: 0.9rem;
  }
}
</style>