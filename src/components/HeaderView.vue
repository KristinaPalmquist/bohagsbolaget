<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
// import { useStore } from '@/store';
// import MainNavbar from '@/components/MainNavbar.vue';
import LanguageToggle from '@/components/LanguageToggle.vue';
import ThemeToggle from './ThemeToggle.vue';

import NavLinks from '@/components/NavLinks.vue';

const router = useRouter();
const route = { name: 'Home', path: '/' };

// const store = useStore();

const { t } = useI18n();
// const companyName = ref(t('facts.companyName'));

const isDarkMode = ref(
  document.documentElement.getAttribute('data-theme') === 'dark'
);

// const logo = computed(() => {
//   return isDarkMode.value
//     ? 'url("/assets/logos/white_text_transparent_bg.png")'
//     : 'url("/assets/logos/black_text_transparent_bg.png")';
// });

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
    <div class="header-content ">
      <!-- <div class="header-btns">
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
    <NavLinks /> -->

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
          {{ t('facts.companyName') }}
        </a>
      </div>
      <div class="header-links component-container">
        <NavLinks />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
 #header-view {
  width: 100vw;
  color: var(--vt-c-white);
  margin: 0;
  padding: 0.5rem;
  background-color: var(--color-1);
}

#header-view a {
  color: inherit;
  text-decoration: none;
 
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
}

.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.header-title {
  font-size: 12vw;
  line-height: 1;
}

.header-title:hover {
  text-decoration: none;
  transform: none;
  text-shadow: none;
}

.header-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vw;
  margin: 0;
  padding: 0;
}

.header-links
.main-navbar a {
  color: inherit;
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
