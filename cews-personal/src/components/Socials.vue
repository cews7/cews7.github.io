<template>
  <div class="socials">
    <a href="https://www.linkedin.com/in/charleswahlgrensauro/" target="_blank" rel="noopener noreferrer">
      <img src="/In-Blue-21.png" alt="LinkedIn" class="social-icon linkedin-icon">
    </a>
    <a href="https://github.com/cews7" target="_blank" rel="noopener noreferrer">
      <img src="/github-mark.svg" alt="GitHub" class="social-icon github-icon">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Socials'
}
</script>

<style scoped>
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s ease;
}

.social-icon:hover {
  opacity: 0.7;
}

.linkedin-icon {
  width: 21px; /* Adjust if needed to match the original image size */
}
</style>
