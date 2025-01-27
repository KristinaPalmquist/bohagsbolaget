<script setup>
import { ref } from 'vue';

const questions = ref([
  {
    id: 1,
    question: 'What is Vue.js?',
    answer:
      'Vue.js is a progressive JavaScript framework for building user interfaces.',
  },
  {
    id: 2,
    question: 'How do I install Vue.js?',
    answer: 'You can install Vue.js via npm by running `npm install vue`.',
  },
  {
    id: 3,
    question: 'What is the Vue CLI?',
    answer:
      'The Vue CLI is a command-line interface tool that helps you to scaffold and manage Vue.js projects.',
  },
]);
</script>

<template>
  <div id="qa-section">
    <div class="component-container">
      <div class="header">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="qa-list">
        <div v-for="item in questions" :key="item.id" class="qa-item">
          <h3 class="qa-question">{{ item.question }}</h3>
          <p class="qa-answer">{{ item.answer }}</p>
        </div>
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
