<template>
  <div class="contact">
    <h1 class="page-heading">Contact</h1>
    <p class="page-intro">
      Tell me what you're building. I read everything that comes through here.
    </p>

    <form class="form" :action="`https://formspree.io/f/${formspreeFormId}`" method="POST">
      <div class="field">
        <label class="eyebrow" for="name">Name</label>
        <input id="name" type="text" name="name" required />
      </div>

      <div class="field">
        <label class="eyebrow" for="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div class="field">
        <label class="eyebrow" for="message">Message</label>
        <textarea id="message" name="message" rows="7" required></textarea>
      </div>

      <button class="submit" type="submit">Send message</button>
    </form>

    <hr class="rule" />

    <p class="prose">
      Or email directly:
      <a href="mailto:cwahlgrensauro@gmail.com">cwahlgrensauro@gmail.com</a>
    </p>
  </div>
</template>

<script setup>
const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID
</script>

<style scoped>
.page-heading { font-size: var(--step-3); margin-bottom: var(--gap-s); }
.page-intro { color: var(--ink-muted); margin-bottom: var(--gap-l); }

.form { max-width: var(--measure); }

.field { margin-bottom: var(--gap-m); }

.field label { margin-bottom: var(--gap-xs); }

.field input,
.field textarea {
  width: 100%;
  font-family: var(--font-prose);
  font-size: var(--step-0);
  color: var(--ink);
  background: var(--paper-raised);
  border: 1px solid var(--rule-strong);
  padding: var(--gap-s);
  transition: border-color 0.18s ease;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--accent);
  outline: none;
}

.field textarea { resize: vertical; }

.submit {
  font-family: var(--font-meta);
  font-size: var(--step--1);
  letter-spacing: 0.06em;
  color: var(--paper);
  background: var(--ink);
  border: 1px solid var(--ink);
  padding: var(--gap-s) var(--gap-m);
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease;
}

.submit:hover { background: var(--accent); border-color: var(--accent); }
</style>
