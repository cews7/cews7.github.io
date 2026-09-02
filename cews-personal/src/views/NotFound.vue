<template>
  <div class="notfound">
    <h1 class="page-heading">Not here</h1>
    <p class="prose">
      Nothing at <code>{{ $route.path }}</code>. It may have been removed from the register.
    </p>
    <p class="prose">
      <router-link to="/">Back to the front page</router-link>.
    </p>
  </div>
</template>

<style scoped>
.page-heading { font-size: var(--step-3); margin-bottom: var(--gap-m); }

code {
  font-family: var(--font-meta);
  font-size: var(--step--1);
  background: var(--paper-sunk);
  padding: 0.1rem 0.3rem;
}
</style>
