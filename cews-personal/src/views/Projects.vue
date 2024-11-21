<template>
  <div class="projects">
    <Podclub />
    <Stellabounce />
    <SpaceInvaders />
  </div>
</template>

<script>
import Podclub from '../components/projects/Podclub.vue'
import SpaceInvaders from '../components/projects/SpaceInvaders.vue'
import Stellabounce from '../components/projects/Stellabounce.vue'
export default {
  name: 'Projects',
  components: {
    Podclub,
    SpaceInvaders,
    Stellabounce,
  }
}
</script>
