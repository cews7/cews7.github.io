<template>
  <div class="contact-form-container">
    <div class="contact-form">
      <h1>Contact Me</h1>
      <form>
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
      <p>Or email me directly at cwahlgrensauro@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

<style scoped>
.contact-form-container {
  display: flex;
  justify-content: left;
  height: 100vh;
}

.contact-form {
  width: 400px;
  padding: 30px;
  position: relative;
  background-color: white; /* Add a background to ensure content is above the spinning border */
  z-index: 1; /* Ensure the form content is above the spinning border */
}

.spinning-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px dotted #007bff;
  border-radius: 10px;
  animation: spin 30s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.contact-form h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px 0;
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
  width: 100%;
  padding: 10px;
  background-color: #00008B;
  color: white;
  border: none;
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
</style>
