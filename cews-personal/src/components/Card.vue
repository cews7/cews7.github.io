<template>
  <div class="card" :style="{ borderColor: borderColor }">
    <img :src="image" :alt="description" class="card-image">
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      required: true
    }
  }
}
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
</style>

