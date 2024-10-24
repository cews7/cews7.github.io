<template>
  <div class="about-container">
    <div class="image-container">
      <transition name="fade" mode="out-in">
        <img :src="currentImage || '/profile-photo.jpeg'" alt="Profile photo" :key="currentImage" />
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

<script>
export default {
  name: 'AboutMe',

  data() {
    return {
      currentImage: '/profile-photo.jpeg',
      imageChangeTimeout: null,
      images: {
        backpacking: '/backpacking-photo.jpeg',
        skiing: '/skiing-photo.jpg',
        garden: '/garden-photo.jpg',
        pets: '/pets-photo.jpeg'
      }
    }
  },

  methods: {
    changeImage(image) {
      clearTimeout(this.imageChangeTimeout);
      this.imageChangeTimeout = setTimeout(() => {
        this.currentImage = this.images[image];
      }, 500);
    },
    resetImage() {
      clearTimeout(this.imageChangeTimeout);
      this.imageChangeTimeout = setTimeout(() => {
        this.currentImage = '/profile-photo.jpeg';
      }, 1000);
    }
  },

  beforeUnmount() {
    clearTimeout(this.imageChangeTimeout);
  }
}
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
