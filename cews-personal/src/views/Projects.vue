<template>
  <div class="projects">
    <h1>Projects</h1>
    <Podclub />
    <SpaceInvaders />
  </div>
</template>

<script>
import Podclub from '../components/projects/Podclub.vue'
import SpaceInvaders from '../components/projects/SpaceInvaders.vue'

export default {
  name: 'Projects',
  components: {
    Podclub,
    SpaceInvaders
  }
}
</script>
