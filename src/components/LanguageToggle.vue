<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store';

const { locale } = useI18n();
const store = useStore();

const currentLanguage = computed(() => store.language);

const toggleLanguage = () => {
  const newLanguage = currentLanguage.value === 'en' ? 'sv' : 'en';
  store.setLanguage(newLanguage, locale);
};
</script>

<template>
  <div id="language-toggle">
    <!-- <button @click="toggleLanguage">
      {{ currentLanguage === 'sv' ? '' : '' }}
    </button> -->
    <button @click="toggleLanguage">
      {{ currentLanguage === 'sv' ? '🇸🇪' : '🇬🇧' }}
    </button>
  </div>
</template>

<style scoped>
#language-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
}

#language-toggle button {
  background: transparent;
  border: none;
  padding: 0;
  /* padding: 0.5rem 1rem; */
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

#language-toggle:hover {
  animation: wiggle 0.5s ease-in-out;
  color: var(--color-primary);
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wiggle {
  animation: wiggle 1s ease-in-out;
}
</style>
