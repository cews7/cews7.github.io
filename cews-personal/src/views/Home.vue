<template>
  <div class="home">
    <h1>
      <template v-if="isFirstVisit">
        <span v-for="(line, lineIndex) in textLines" :key="lineIndex">
          <span v-for="(char, charIndex) in line" :key="charIndex" v-html="char"></span>
          <br v-if="lineIndex < textLines.length - 1" />
        </span>
      </template>
      <template v-else>
        <div class="pets-container">
          <div class="cat-container">
            <svg class="cat" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Ears -->
              <path class="cat-ears" d="M55,65 L85,95 L70,45 Z" />
              <path class="cat-ears" d="M145,65 L115,95 L130,45 Z" />
              <!-- Head -->
              <circle class="cat-head" cx="100" cy="90" r="40" />
              <!-- Body -->
              <path class="cat-body" d="M60,110 Q100,90 140,110 Q160,130 140,150 Q100,170 60,150 Q40,130 60,110 Z" />
              <!-- Eyes -->
              <circle class="cat-eye" cx="85" cy="85" r="5" />
              <circle class="cat-eye" cx="115" cy="85" r="5" />
              <!-- Mouth -->
              <path class="cat-mouth" d="M95,100 Q100,105 105,100" />
              <!-- Whiskers -->
              <line class="whisker" x1="50" y1="95" x2="80" y2="95" />
              <line class="whisker" x1="50" y1="100" x2="80" y2="100" />
              <line class="whisker" x1="50" y1="105" x2="80" y2="105" />
              <line class="whisker" x1="120" y1="95" x2="150" y2="95" />
              <line class="whisker" x1="120" y1="100" x2="150" y2="100" />
              <line class="whisker" x1="120" y1="105" x2="150" y2="105" />
              <!-- Tail -->
              <path class="cat-tail" d="M140,150 Q160,170 180,150" />
            </svg>
          </div>
          <div class="dog-container">
            <svg class="dog" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Body (laying down) -->
              <path class="dog-body" d="M40,120 Q100,110 160,120 Q170,140 160,150 Q100,160 40,150 Q30,140 40,120 Z" />
              <!-- Ears (updated to be more visible and floppy) -->
              <path class="dog-ears" d="M30,95 Q20,105 35,115" />
              <path class="dog-ears-inner" d="M32,97 Q25,105 35,113" />
              <path class="dog-ears" d="M70,95 Q80,105 65,115" />
              <path class="dog-ears-inner" d="M68,97 Q75,105 65,113" />
              <!-- Head -->
              <circle class="dog-head" cx="50" cy="110" r="25" />
              <!-- Snout -->
              <path class="dog-snout" d="M40,115 Q50,120 60,115" />
              <!-- Nose -->
              <circle class="dog-nose" cx="50" cy="112" r="4" />
              <!-- Eyes (closed/sleeping) -->
              <path class="dog-eye" d="M40,105 Q45,103 50,105" />
              <path class="dog-eye" d="M50,105 Q55,103 60,105" />
              <!-- Tail -->
              <path class="dog-tail" d="M160,135 Q180,145 170,125" />
              <!-- Paws -->
              <circle class="dog-paw" cx="45" cy="150" r="8" />
              <circle class="dog-paw" cx="155" cy="150" r="8" />
            </svg>
          </div>
        </div>
      </template>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      textLines: ['', '', ''],
      isFirstVisit: true
    }
  },
  mounted() {
    // Check if this is the first visit
    this.isFirstVisit = !localStorage.getItem('hasVisitedHome');
    
    if (this.isFirstVisit) {
      const lines = [
        "Welcome friend!",
        "So glad you're here.",
        "Take a look around."
      ];
      this.revealText(lines, 0, 0);
      // Set the flag in localStorage
      localStorage.setItem('hasVisitedHome', 'true');
    }

    // Add event listener for tab closing
    window.addEventListener('beforeunload', this.handleTabClose);
  },
  beforeDestroy() {
    // Clean up event listener when component is destroyed
    window.removeEventListener('beforeunload', this.handleTabClose);
  },
  methods: {
    handleTabClose() {
      localStorage.removeItem('hasVisitedHome');
    },
    revealText(lines, lineIndex, charIndex) {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          this.textLines[lineIndex] += lines[lineIndex][charIndex];
          setTimeout(() => this.revealText(lines, lineIndex, charIndex + 1), 70); // Adjust speed here
        } else {
          this.revealText(lines, lineIndex + 1, 0);
        }
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');

.home {
  text-align: center;
  padding: 20px;
  font-family: 'Lora', serif;
  color: #333;
}

h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 20px;
  line-height: 1.5;
}

.cat-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.cat {
  width: 200px;
  height: 200px;
}

.cat-head,
.cat-body,
.cat-ears {
  fill: #333;
}

.cat-eye {
  fill: #fff;
}

.cat-mouth {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
}

.cat-tail {
  fill: none;
  stroke: #333;
  stroke-width: 12;
  stroke-linecap: round;
  transform-origin: 140px 150px;
  animation: tailWag 2s infinite ease-in-out;
}

@keyframes tailWag {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}

.cat-ears {
  fill: #333;
  stroke: #ffcdd2;
  stroke-width: 6;
  stroke-linejoin: round;
}

.whisker {
  stroke: #333;
  stroke-width: 2;
  stroke-linecap: round;
  animation: whiskerTwitch 4s infinite ease-in-out;
}

@keyframes whiskerTwitch {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  75% { transform: rotate(-2deg); }
}

.pets-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 300px;
}

.dog-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dog {
  width: 250px;
  height: 250px;
  transform: translateY(-20px);
}

.dog-body,
.dog-head {
  fill: #8B4513;
}

.dog-ears {
  fill: none;
  stroke: #8B4513;
  stroke-width: 12; /* Increased from 8 */
  stroke-linecap: round;
  animation: earFlop 4s infinite ease-in-out;
}

.dog-ears-inner {
  fill: none;
  stroke: #A0522D; /* Lighter brown for inner ear */
  stroke-width: 8;
  stroke-linecap: round;
  animation: earFlop 4s infinite ease-in-out;
}

.dog-snout {
  fill: none;
  stroke: #fff;
  stroke-width: 3;
}

.dog-nose {
  fill: #333;
}

.dog-eye {
  fill: none;
  stroke: #333;
  stroke-width: 2;
  stroke-linecap: round;
}

.dog-tail {
  fill: none;
  stroke: #8B4513;
  stroke-width: 12;
  stroke-linecap: round;
  transform-origin: 160px 135px;
  animation: tailWagSlow 4s infinite ease-in-out;
}

.dog-paw {
  fill: #A0522D;
}

@keyframes tailWagSlow {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

@keyframes earFlop {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
}

/* Update responsive styles to maintain side-by-side layout */
@media (max-width: 768px) {
  .pets-container {
    /* Remove flex-direction: column to keep horizontal layout */
    gap: 20px;
    height: auto;
    /* Add padding to ensure pets don't touch screen edges */
    padding: 0 10px;
  }
  
  .cat {
    width: 130px; /* Slightly smaller for mobile */
    height: 130px;
  }
  
  .dog {
    width: 160px; /* Keep dog slightly larger than cat */
    height: 160px;
    transform: translateY(-20px); /* Maintain vertical alignment */
  }
}

/* Add extra small screen size adjustments */
@media (max-width: 400px) {
  .pets-container {
    gap: 10px; /* Reduce gap for very small screens */
  }
  
  .cat {
    width: 110px;
    height: 110px;
  }
  
  .dog {
    width: 140px;
    height: 140px;
  }
}
</style>
