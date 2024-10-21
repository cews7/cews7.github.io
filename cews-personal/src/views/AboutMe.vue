<template>
  <div class="about-me">
    <div class="card-grid">
      <Card 
        v-for="(card, index) in cards" 
        :key="index"
        :image="card.image"
        :description="card.description"
        :borderColor="card.borderColor"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'AboutMe',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          image: 'https://picsum.photos/300/200?random=1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          borderColor: '#007bff'
        },
        {
          image: 'https://picsum.photos/300/200?random=2',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          borderColor: '#28a745'
        },
        {
          image: 'https://picsum.photos/300/200?random=3',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          borderColor: '#dc3545'
        },
        {
          image: 'https://picsum.photos/300/200?random=4',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          borderColor: '#ffc107'
        },
        {
          image: 'https://picsum.photos/300/200?random=1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          borderColor: '#007bff'
        },
        {
          image: 'https://picsum.photos/300/200?random=2',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          borderColor: '#28a745'
        },
      ]
    }
  }
}
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
