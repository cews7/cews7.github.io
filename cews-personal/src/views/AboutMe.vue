<template>
  <div class="about-container">
    <div class="image-container">
      <transition name="fade" mode="out-in">
        <img :src="currentImage" alt="Profile photo" :key="currentImage" />
      </transition>
    </div>
    <div class="text-container">
      <p>
        Hi! I'm Eric. I'm a software engineer with a passion for building products that are both functional and beautiful.
        When I'm not coding, you can find me 
        <span class="highlight backpacking" @mouseover="changeImage('backpacking')" @mouseleave="resetImage">backpacking,</span>
        <span class="highlight skiing" @mouseover="changeImage('skiing')" @mouseleave="resetImage">skiing,</span> working in the
        <span class="highlight garden" @mouseover="changeImage('garden')" @mouseleave="resetImage">garden,</span> or hanging out with these
        <span class="highlight pets" @mouseover="changeImage('pets')" @mouseleave="resetImage">two rascals</span>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const defaultImage = '/assets/profile-photo.jpeg'
const currentImage = ref(defaultImage)
const imageChangeTimeout = ref<number | null>(null)

const images = {
  backpacking: '/assets/backpacking-photo.jpeg',
  skiing: '/assets/skiing-photo.jpg',
  garden: '/assets/garden-photo.jpg',
  pets: '/assets/pets-photo.jpeg'
}

const changeImage = (image: keyof typeof images) => {
  if (imageChangeTimeout.value) clearTimeout(imageChangeTimeout.value)
  imageChangeTimeout.value = window.setTimeout(() => {
    currentImage.value = images[image]
  }, 500)
}

const resetImage = () => {
  if (imageChangeTimeout.value) clearTimeout(imageChangeTimeout.value)
  imageChangeTimeout.value = window.setTimeout(() => {
    currentImage.value = defaultImage
  }, 1000)
}

onBeforeUnmount(() => {
  if (imageChangeTimeout.value) clearTimeout(imageChangeTimeout.value)
})
</script>

<style scoped>
.about-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding: 10px 20px 0;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.text-container {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .about-container {
    flex-direction: column;
    gap: 20px;
    padding: 0 15px;
  }

  .image-container, .text-container {
    width: 100%;
  }

  .image-container img {
    max-height: 300px;
    object-fit: cover;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.highlight {
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  padding: 0 0.25em;
}

.highlight::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  bottom: 0;
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: transform 0.2s ease;
}

.highlight:hover::before {
  transform: scale(1.05);
}

.backpacking {
  color: #8B4513;
}
.backpacking::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,50 C 30,40 70,60 100,50 C 130,40 170,60 200,50' stroke='%23ffd54f' stroke-width='80' fill='none' style='stroke-linecap: round'/%3E%3C/svg%3E");
}

.skiing {
  color: #0D47A1;
}
.skiing::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,50 C 30,40 70,60 100,50 C 130,40 170,60 200,50' stroke='%2381d4fa' stroke-width='80' fill='none' style='stroke-linecap: round'/%3E%3C/svg%3E");
}

.pets {
  color: #1B5E20;
}
.pets::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,50 C 30,40 70,60 100,50 C 130,40 170,60 200,50' stroke='%23a5d6a7' stroke-width='80' fill='none' style='stroke-linecap: round'/%3E%3C/svg%3E");
}

.garden {
  color: #9e0a0a;
}
.garden::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,50 C 30,40 70,60 100,50 C 130,40 170,60 200,50' stroke='%23ef9a9a' stroke-width='80' fill='none' style='stroke-linecap: round'/%3E%3C/svg%3E");
}
</style>