<template>
  <div class="socials">
    <a
      href="https://www.linkedin.com/in/charleswahlgrensauro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/assets/In-Blue-21.png" alt="LinkedIn" class="social-icon social-icon--linkedin" />
    </a>
    <a href="https://github.com/cews7" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github-mark.svg" alt="GitHub" class="social-icon" />
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.socials {
  display: flex;
  align-items: center;
  gap: var(--gap-m);
}

.socials a { border-bottom: 0; }

.social-icon {
  width: 18px;
  height: 18px;
  /* Flatten both marks to ink so they read as one set, not two logos. */
  filter: grayscale(1) brightness(0) opacity(0.55);
  transition: filter 0.18s ease;
}

.socials a:hover .social-icon,
.socials a:focus-visible .social-icon {
  filter: grayscale(1) brightness(0) opacity(1);
}

.social-icon--linkedin { width: 16px; }
</style>
