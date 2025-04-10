<script setup>
import { computed, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  searchQuery: String,
});

const emits = defineEmits(['productClicked']);

const { t } = useI18n();
const companyName = ref(t('facts.companyName'));
const heroRef = ref(null);

onMounted(() => {
  const heroElement = heroRef.value;
  if (heroElement) {
    heroElement.style.position = 'absolute';
    heroElement.style.top = '0';
    heroElement.style.left = '0';
    heroElement.style.width = '100vw';
    heroElement.style.height = '100vh';
  }
});
</script>

<template>
  <div id="home-view">
    <div class="hero" ref="heroRef">
      <div class="fade-up"></div>
      <div class="hero-image"></div>

      <div class="fade-down"></div>
      <div class="glass-card">
        <div class="hero-text">
          <h1>{{ t('home.header') }}</h1>
          <img
            src="@/assets/logos/white_leaf_white_text_transparent_bg.png"
            alt="{{companyName}}"
            class="logo-title"
          />
          <p>
            {{ t('home.hero.text1') }}
          </p>
        </div>
      </div>
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
#home-view {
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-image {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/hero.jpg');
  background-size: cover;
  background-position: center;
  border: none;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--hero-overlay);
}

.fade-up {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70%;
  height: 30%;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    var(--gradient-start),
    var(--gradient-end)
  );
  border: none;
}

.fade-down {
  position: absolute;
  left: 0;
  right: 0;
  top: 70%;
  height: 30%;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(
    to top,
    var(--gradient-start),
    var(--gradient-end)
  );
  border: none;
}

.glass-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.intro-sections {
  margin-top: 100vh;
}

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
}
</style>
