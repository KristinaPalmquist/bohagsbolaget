<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  searchQuery: String,
});

const emits = defineEmits(['productClicked']);

const { t } = useI18n();
const companyName = ref(t('facts.companyName'));
</script>

<template>
  <div id="welcome-view">
    <div class="hero">
    </div>
    <div class="component-container">
      <div class="intro-sections">
        <section class="introduction">
          <h2>{{ t('home.introduction.header') }}</h2>
          <p>
            {{ t('home.introduction.text', { companyName }) }}
          </p>
        </section>
        <section class="features">
          <h2>{{ t('home.features.header') }}</h2>
          <ul>
            <li>
              <strong>{{ t('home.features.items[0].title') }}</strong
              >{{ t('home.features.items[0].text') }}
            </li>
            <li>
              <strong>{{ t('home.features.items[1].title') }}</strong
              >{{ t('home.features.items[1].text') }}
            </li>
            <li>
              <strong>{{ t('home.features.items[2].title') }}</strong
              >{{ t('home.features.items[2].text') }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  <div class="empty-space"></div>
</template>

<style scoped>
#welcome-view {
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}


.glass-card {
  position: relative;
  /* top: 50%; */
  /* left: 50%;
  transform: translate(-50%, -50%); */
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  width: clamp(500px, 50%, 900px);
  text-align: center;
  z-index: 2;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.hero-text h1 {
  color: white;
  font-size: 3.5rem;
  line-height: 4.5rem;
  padding: 0;
}

.hero-text .logo-title {
  width: 100%;
  /* width: clamp(500px, 50%, 900px); */
  height: clamp(100px, 10vh, 300px);
  height: auto;

  background-size: contain;
  background-position: center;
  margin: 0 0.5rem 1rem;
}

.hero-text p {
  color: white;
  font-size: 1.65rem;
  line-height: 2rem;
}

/* .intro-sections {
  margin-top: 100vh;
} */

.features ul li {
  display: grid;
  grid-template-columns: 2fr 3fr;
}

.features {
  margin-top: 2rem;
}

.features ul {
  padding: 0;
}

.features li {
  list-style-type: none;
  margin-bottom: 1rem;
}
/* 
@media only screen and (max-width: 950px) {
  .glass-card {
    margin-top: 2rem;
    padding: 1rem;
  }
}

@media only screen and (max-width: 600px) {
  .hero-text h1 {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  .glass-card {
    width: 90%;
  }
} */
</style>
