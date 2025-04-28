<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import NavLinks from '@/components/NavLinks.vue';

const router = useRouter();
const route = { name: 'Home', path: '/' };
const { t } = useI18n();

const handleRouting = (event, path) => {
  event.preventDefault();
  router.push(path);
};
</script>

<template>
  <header id="header-view">
    <div class="header-content">
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2vw;
  margin: 0;
  padding: 0;
}

.header-links .main-navbar a {
  color: inherit;
}
</style>
