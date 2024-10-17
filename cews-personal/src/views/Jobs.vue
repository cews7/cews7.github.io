<template>
  <div class="jobs">
    <h1>Employment</h1>
    <JumpCloud />
    <Crownpeak />
  </div>
</template>

<script>
import JumpCloud from '../components/jobs/JumpCloud.vue'
import Crownpeak from '../components/jobs/Crownpeak.vue'

export default {
  name: 'Jobs',
  components: {
    JumpCloud,
    Crownpeak
  }
}
</script>
