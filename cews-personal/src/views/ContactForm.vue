<template>
  <div class="contact-form-container">
    <div class="contact-form">
      <h1>What can I build for you?</h1>
      <form :action="`https://formspree.io/f/${formspreeFormId}`" method="POST">
        <div class="form-group">
          <input type="text" id="name" name="name" required placeholder="Name">
        </div>
        <div class="form-group">
          <input type="email" id="email" name="email" required placeholder="Email">
        </div>
        <div class="form-group">
          <textarea id="message" name="message" required placeholder="Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Or email me directly at <a href="mailto:cwahlgrensauro@gmail.com">cwahlgrensauro@gmail.com</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID
</script>

<style scoped>
.contact-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
} 

.contact-form {
  width: 100%;
  max-width: 600px;
  padding: 30px;
  margin: 0 15px;
  background-color: white;
}

.contact-form h1 {
  text-align: left;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 90%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #007bff;
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: #0056b3;
}

.contact-form textarea {
  height: 100px;
  resize: vertical;
}

.contact-form button {
  display: block;
  width: auto;
  min-width: 120px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #00008B;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: #000066;
}

.contact-form p {
  text-align: center;
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .contact-form {
    padding: 20px 15px;
  }

  .contact-form button {
    width: 100%;
  }
}
</style>