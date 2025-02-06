<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// import { useStore } from '@/store';
// import MainNavbar from '@/components/MainNavbar.vue';
import LanguageToggle from '@/components/LanguageToggle.vue';
import ThemeToggle from './ThemeToggle.vue';

import NavLinks from '@/components/NavLinks.vue';

const router = useRouter();
const route = { name: 'Home', path: '/' };

const isDarkMode = ref(
  document.documentElement.getAttribute('data-theme') === 'dark'
);

const logo = computed(() => {
  return isDarkMode.value
    ? 'url("/assets/logos/white_text_transparent_bg.png")'
    : 'url("/assets/logos/black_text_transparent_bg.png")';
});

const handleRouting = (event, path) => {
  event.preventDefault();
  router.push(path);
};

const observeThemeChange = () => {
  const observer = new MutationObserver(() => {
    isDarkMode.value =
      document.documentElement.getAttribute('data-theme') === 'dark';
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
};

onMounted(() => {
  observeThemeChange();
});
</script>

<template>
  <header id="header-view">
    <div class="header-content component-container">
      <div class="header-btns">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <div class="title">
        <a
          :href="route.path"
          @click="
            (event) => {
              handleRouting(event, route.path);
            }
          "
          class="header-title"
        >
          <div class="logo" :style="{ backgroundImage: logo }"></div>
        </a>
      </div>

    <NavLinks />
    </div>
  </header>
</template>

<style scoped>
#header-view {
  width: 100vw;
  color: var(--color-text);
  margin: 0;
  padding: 0;
  z-index: 10;
  background-color: var(--footer-background-color);
}

.title {
  width: 100%;
  /* width: clamp(300px, 80vw, 1200px); */
  aspect-ratio: 50/7;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
}

.header-content {
  width: 100%;
  width: clamp(300px, 80vw, 1200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0
}

a {
  width: 100%;
  aspect-ratio: 50/7;
  text-decoration: none;
  color: var(--text-color);
}

.logo {
  width: clamp(300px, 80vw, 1200px);
  aspect-ratio: 50/7;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s ease-in-out;
}

.header-content img {
  width: 500px;
}

.company-name {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
}

.header-btns {
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 2vw;
  margin: 0;
  padding: 0;
}

/* @media only screen and (max-width: 980px) {
  #header-view {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border: none;
    height: auto;
    padding: 1rem;
    margin: 0;
  }
} */

/* @media only screen and (max-width: 780px) {
  .header-content {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    width: 80vw;
    height: 10vw;
  }

  .nav-btns {
    width: 100%;
    justify-content: center;
    gap: 10vw;
    padding-top: 0.5rem;
  }


} */
/* 
@media only screen and (max-width: 600px) {
  #header-view {
    height: auto;
    margin-bottom: 0.5rem;
  }

  .nav-btns > * {
    margin-left: 0;
  }
}

@media only screen and (max-width: 420px) {
  .header-content {
    width: 100%;
  }

  .language {
    grid-area: language;
  }

  .theme {
    grid-area: theme;
  }

  .nav {
    grid-area: nav;
  }
} */
</style>
