<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const emit = defineEmits(['update:isOpen']);
const isOpen = ref(false);

const routes = ref([
  { name: t('routes.home'), path: '/' },
  { name: t('routes.about'), path: '/about' },
  { name: t('routes.contact'), path: '/contact' },
  { name: t('routes.testimonials'), path: '/testimonials' },
  { name: t('routes.questions'), path: '/questions' },
]);

const updateRoutes = () => {
  routes.value = [
    { name: t('routes.home'), path: '/' },
    { name: t('routes.about'), path: '/about' },
    { name: t('routes.contact'), path: '/contact' },
    { name: t('routes.testimonials'), path: '/testimonials' },
    { name: t('routes.questions'), path: '/questions' },
  ];
};

watch(locale, updateRoutes);

const router = useRouter();

const handleRouting = (event, path) => {
  event.preventDefault();
  isOpen.value = false;
  emit('update:isOpen', isOpen.value);
  router.push(path);
};
</script>

<template>
  <div id="main-navbar" class="component-container">
    <nav>
      <!-- <ul>
        <li v-for="route in routes" :key="route.name"> -->
      <div class="link" v-for="route in routes" :key="route.name">
        <!-- <a
        v-for="route in routes"
        :key="route.name"
        href="#"
        @click="handleRouting($event, route.path)"
        :style="navbarItemStyle"
      > -->
        <a
          href="#"
          @click="handleRouting($event, route.path)"
          :style="navbarItemStyle"
        >
          <span class="navbar-item"> {{ route.name }}</span>
        </a>
      </div>
      <!-- </li>
      </ul> -->
    </nav>
  </div>
</template>

<style scoped>
#main-navbar {
  padding: 0.5rem;
}

nav {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.link {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

a {
  display: inline-block;
  font-size: 1.5rem;
  color: var(--vt-c-white);
}

/* a:hover {
  font-style: normal;
  transform: scale(120%);
} */

@media only screen and (max-width: 780px) {


  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
  }
}

/* @media only screen and (max-width: 600px) {
  #main-navbar {
    padding: 0;
  }




  #main-navbar .navbar {
    height: 95%;
  }

  #main-navbar .navbar a,
  #main-navbar .navbar a span {
    margin: auto 0;
  }

  #main-navbar .navbar a {
    margin-left: -30%;
  }
} */
</style>
