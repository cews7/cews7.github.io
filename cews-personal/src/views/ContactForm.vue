<template>
  <div class="contact-form">
    <h1>Contact Me</h1>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
      <p>Or email me directly at cwahlgrensauro@gmail.com</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
}

</script>

<style scoped>
.contact-form {
  margin-top: 10px;
  width: 50%;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.contact-form form div {
  margin-bottom: 10px;
}

.contact-form form label {
  margin-bottom: 5px;
}

.contact-form form input,
.contact-form form textarea {
  padding: 5px;
  width: 100%;
}

.contact-form form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.contact-form form button:hover {
  background-color: #0056b3;
}
</style>
