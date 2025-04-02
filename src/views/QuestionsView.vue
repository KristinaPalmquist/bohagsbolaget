<script setup>
import { ref } from 'vue';

const questions = ref([
  {
    id: 1,
    question: 'Vad gör Bohagsbolaget?',
    answer:
      'Vi köper hela bohag, t.ex. dödsbon, och tar hand om transport m.m..',
  },
  {
    id: 2,
    question: 'Hur funkar det?',
    answer:
      'Vi kommer tillsammans överens om en tidpunkt där vi kommer och går igenom bohaget. Sedan ger vi dig ett prisförslag på helheten som du väljer om du vill acceptera.',
  },
  {
    id: 3,
    question: 'Vad gör jag om jag har frågor?',
    answer: 'Ring oss så svarar vi på alla frågor och funderingar!',
  },
]);
</script>

<template>
  <div id="qa-section">
    <div class="component-container">
      <div class="header">
        <h2>Frågor och svar</h2>
      </div>
      <div class="qa-list">
        <details v-for="item in questions" :key="item.id" class="qa-item">
          <summary class="qa-question">{{ item.question }}</summary>
          <p class="qa-answer">{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </div>
</template>

<style scoped>
#qa-section {
  background-color: #f7fafc;
  padding: 3rem 0;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #2d3748;
}

.qa-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.qa-item {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.qa-question {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
}

.qa-answer {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #4a5568;
}
</style>
