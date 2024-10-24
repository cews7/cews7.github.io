<template>
  <div class="home">
    <h1>
      <span v-for="(line, lineIndex) in haikuLines" :key="lineIndex">
        <span v-for="(char, charIndex) in line" :key="charIndex" v-html="char"></span>
        <br v-if="lineIndex < haikuLines.length - 1" />
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      haikuLines: ['', '', '']
    }
  },
  mounted() {
    const lines = [
      "What you seek to find",
      "you already have within",
      "enjoy what is now"
    ];
    this.revealText(lines, 0, 0);
  },
  methods: {
    revealText(lines, lineIndex, charIndex) {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          this.haikuLines[lineIndex] += lines[lineIndex][charIndex];
          setTimeout(() => this.revealText(lines, lineIndex, charIndex + 1), 70); // Adjust speed here
        } else {
          this.revealText(lines, lineIndex + 1, 0);
        }
      } else {
        this.$emit('haikuFinished');
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');

.home {
  text-align: left;
  padding: 20px;
  font-family: 'Lora', serif;
  color: #333;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  line-height: 1.5;
}
</style>
