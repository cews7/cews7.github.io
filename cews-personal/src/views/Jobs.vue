<template>
  <div class="jobs-container">
    <div class="job-list">
      <JumpCloud />
      <Crownpeak />
    </div>
  </div>
</template>

<script>
import Crownpeak from '../components/jobs/Crownpeak.vue'
import JumpCloud from '../components/jobs/JumpCloud.vue'

export default {
  name: 'Jobs',
  components: {
    Crownpeak,
    JumpCloud,
  }
}
</script>

<style scoped>
.job-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
