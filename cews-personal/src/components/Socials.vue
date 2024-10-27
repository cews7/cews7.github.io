<template>
  <div class="socials">
    <a href="https://www.linkedin.com/in/charleswahlgrensauro/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/In-Blue-21.png" alt="LinkedIn" class="social-icon linkedin-icon">
    </a>
    <a href="https://github.com/cews7" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github-mark.svg" alt="GitHub" class="social-icon github-icon">
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
  gap: 1.5rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s ease, filter 0.3s ease;
  filter: brightness(0); /* This makes the icons black */
}

.social-icon:hover {
  opacity: 0.7;
  filter: brightness(0) invert(0.3); /* This makes the icons gray on hover */
}

.linkedin-icon {
  width: 21px; /* Adjust if needed to match the original image size */
}

@media screen and (max-width: 768px) {
  .social-icon {
    width: 20px;
    height: 20px;
  }

  .linkedin-icon {
    width: 18px;
  }
}
</style>
