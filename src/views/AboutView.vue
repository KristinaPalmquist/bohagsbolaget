<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const companyName = ref(t('facts.companyName'));

const images = ref([]);
// Dynamically load images using import.meta.glob
const imageModules = import.meta.glob(
  '../assets/img/objects/*.{png,jpg,jpeg,svg}'
);

// Load images asynchronously in onMounted
onMounted(async () => {
  const loadedImages = await Promise.all(
    Object.values(imageModules).map((importImage) => importImage())
  );
  images.value = loadedImages;
});
</script>

<template>
  <div id="about-view">
    <div class="component-container">
      <h1 class="header-about">{{ t('about.header') }}</h1>
      <section class="introduction">
        <p class="content-about1">
          {{ t('about.introduction.text.welcome', { companyName }) }}
        </p>
        <div class="intro-grid">
          <div class="image1">
            <img src="../assets/img/sellers.jpg" alt="" />
          </div>
          <p class="content-about2">
            {{ t('about.introduction.text.online') }}
          </p>
          <p class="content-about3">
            {{ t('about.introduction.text.how') }}
          </p>
        </div>
      </section>

      <section class="team">
        <div class="team-text">
          <h2 class="header-team">
            {{ t('about.content.header') }}
          </h2>
          <p class="content-team">
            {{ t('about.content.text') }}
          </p>
        </div>
        <div class="image2">
          <img src="../assets/img/partners.jpg" alt="" />
        </div>
      </section>
      <section class="values">
        <h2 class="header-values">{{ t('about.values.header') }}</h2>
        <div class="content-values">
          <div>
            <h3>{{ t('about.values.satisfaction.header') }}</h3>
            <p>{{ t('about.values.satisfaction.text') }}</p>
          </div>
          <div>
            <h3>{{ t('about.values.sustainability.header') }}</h3>
            <p>{{ t('about.values.sustainability.text') }}</p>
          </div>

          <div>
            <h3>{{ t('about.values.integrity.header') }}</h3>
            <p>
              {{ t('about.values.integrity.text') }}
            </p>
          </div>
    
        </div>
      </section>
    </div>

    <div class="image image3">
      <div
        class="image3individual"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.default" alt="Object Image" />
      </div>
      
    </div>
  </div>
</template>

<style scoped>
#about-view {
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.header-about {
  margin-bottom: 2rem;
}

.intro-grid {
  display: grid;
  grid-template-areas: 'image1 content-about2' 'image1 content-about3';

  gap: 2rem;
  margin-top: 2rem;
}

.image1 {
  grid-area: image1;
  width: 50vw;
  margin-left: -10vw;
}
.image1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 2rem 2rem 0;
}

.content-about2 {
  grid-area: content-about2;
}
.content-about3 {
  grid-area: content-about3;
}

.team {
  padding: 5rem 0;
  position: relative;
  display: flex;
}

.team-text {
  width: 50%;
  /* padding: 0 2rem; */
  position: relative;
}

.image2 {
  height: 50vh;
  width: 60vw;
  margin-right: -10vw;
  margin-left: 2vw;
}
.image2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem 0 0 2rem;
}

.image3 {
  height: 15vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 2vh;
}

.image3 img {
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
  mix-blend-mode: multiply;
}




@media (max-width: 768px) {
  #about-view {
    padding: 0 2vw;
  }
}
</style>
