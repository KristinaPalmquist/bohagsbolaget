<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import LanguageToggle from '@/components/LanguageToggle.vue';
import ThemeToggle from './ThemeToggle.vue';

const { t } = useI18n();
const emit = defineEmits(['update:isOpen']);

const routes = ref([
  { name: t('routes.home'), path: '/' },
  { name: t('routes.about'), path: '/about' },
  { name: t('routes.contact'), path: '/contact' },
  { name: t('routes.testimonials'), path: '/testimonials' },
  { name: t('routes.questions'), path: '/questions' },
]);

const router = useRouter();

const handleRouting = (event, path) => {
  event.preventDefault();
  router.push(path);
};
</script>

<template>
  <div id="main-navbar" class="component-container">
    <nav id="full-menu">
      <div class="link" v-for="route in routes" :key="route.name">
        <a href="#" @click="handleRouting($event, route.path)">
          <span class="navbar-item"> {{ route.name }}</span>
        </a>
      </div>
      <LanguageToggle />
      <ThemeToggle />
    </nav>
    <nav id="two-row-menu">
      <div class="row-one">
        <div class="link" v-for="route in routes" :key="route.name">
          <a href="#" @click="handleRouting($event, route.path)">
            <span class="navbar-item"> {{ route.name }}</span>
          </a>
        </div>
      </div>
      <div class="row-two">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
    <nav id="hidden-menu">
      <div class="link" v-for="route in routes" :key="route.name">
        <a href="#" @click="handleRouting($event, route.path)">
          <span class="navbar-item"> {{ route.name }}</span>
        </a>
      </div>
      <div id="icons">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* #main-navbar {
  padding: 0.5vh 0;
} */

#full-menu {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#two-row-menu {
  display: none;
}

#hidden-menu {
  display: none;
}

.link {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

a {
  display: inline-block;
  font-size: 2vw;
  color: var(--vt-c-white);
}

#icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media only screen and (max-width: 1080px) {
  #full-menu {
    display: none;
  }

  #two-row-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  #two-row-menu .row-one,
  #two-row-menu .row-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .row-one {
    width: 100%;
  }

  .navbar-item {
    font-size: 2.4vw;
  }
}

@media only screen and (max-width: 780px) {
  #full-menu {
    display: none;
  }
  #two-row-menu {
    display: none;
  }
  #hidden-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    /* padding-bottom: 1rem; */
  }
}
</style>
