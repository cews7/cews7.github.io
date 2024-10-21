<template>
  <div class="projects">
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
