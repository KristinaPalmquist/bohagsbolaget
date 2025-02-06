<script setup>
import { ref, computed, onMounted, onUnmounted, onUpdated, watch } from 'vue';
import { useRouter } from 'vue-router';
// import { useStore } from '@/store';
// import MainNavbar from '@/components/MainNavbar.vue';
import LanguageToggle from '@/components/LanguageToggle.vue';
import ThemeToggle from './ThemeToggle.vue';

const router = useRouter();
const route = { name: 'Home', path: '/' };
// const store = useStore();

const isScrolled = ref(false);
const header = ref(null);
const isOpen = ref(false);
const headerHeight = ref(0);
const titleRef = ref(null);
const isMobile = ref(false);

const isDarkMode = ref(
  document.documentElement.getAttribute('data-theme') === 'dark'
);

const logo = computed(() => {
  return isDarkMode.value
    ? 'url("/assets/logos/white_text_transparent_bg.png")'
    : 'url("/assets/logos/black_text_transparent_bg.png")';
});

const emits = defineEmits(['headerHeight', 'update:isOpen']);

const handleScroll = () => {
  if (!isOpen.value) {
    if (window.scrollY > 50) {
      isScrolled.value = true;
      if (isMobile.value) {
        header.value.style.transform = `translateY(-${
          titleRef.value.offsetHeight + 32
        }px)`;
      }
    } else {
      isScrolled.value = false;
      header.value.style.transform = 'translateY(0)';
    }
  }
};

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 600;
};

const handleRouting = (event, path) => {
  event.preventDefault();
  router.push(path);
  isOpen.value = false;
};

const updateHeaderHeight = () => {
  if (!isOpen.value) {
    emits('headerHeight', document.getElementById('main-header').offsetHeight);
  }
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
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', checkIfMobile);
  checkIfMobile();
  updateHeaderHeight();
  observeThemeChange();
});

onUpdated(() => {
  updateHeaderHeight();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkIfMobile);
});

watch(isOpen, (newVal) => {
  if (newVal) {
    emits('update:isOpen', isOpen.value);
  }
});

watch(headerHeight, (newHeight) => {
  emits('headerHeight', newHeight);
});
</script>

<template>
  <header
    id="main-header"
    :class="{ scrolled: isScrolled, open: isOpen }"
    ref="header"
  >
    <div class="header-content">
      <a
        :href="route.path"
        @click="
          (event) => {
            handleRouting(event, route.path);
          }
        "
        ref="titleRef"
        class="header-title"
        v-if="!isOpen"
      >
        <div class="logo" :style="{ backgroundImage: logo }"></div>
      </a>
      <div class="nav-btns">
        <div class="language">
          <LanguageToggle v-if="!isOpen" />
        </div>
        <div class="theme">
          <ThemeToggle v-if="!isOpen" />
        </div>
        <div class="nav">
          <!-- <MainNavbar @update:isOpen="isOpen = $event" /> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#main-header {
  position: fixed;
  width: 100vw;
  color: var(--color-text);
  padding: 1rem 2rem;
  z-index: 10;
  transition: transform 1s ease-in-out;
}

#main-header.scrolled {
  background-color: var(--color-background-transparent);
}

#main-header.open {
  background: transparent;
  backdrop-filter: none;
  box-shadow: none;
  border: none;
}

.header-content {
  width: clamp(300px, 80vw, 1200px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.logo {
    width: 50vw;
    height: 7vw;
  
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s ease-in-out;
}

.header-content img {
  width: 500px;

  transition: transform 0.5s ease-in-out;
}

.header-title {
  transition: transform 0.5s ease-in-out;
}

.company-name {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
}

.nav-btns {
  display: flex;
  align-items: center;
  gap: 2vw;
}

.nav-btns > * {
  margin-left: 1rem;
}

/* @media only screen and (min-width: 1180px) {
  .logo {
    width: 500px;
    height: 80px;
  }
} */

@media only screen and (max-width: 980px) {
  #main-header {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border: none;
    height: auto;
    padding: 1rem;
    margin: 0;
  }
  #main-header.scrolled {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border: none;
  }
  #main-header.open {
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
  }
 
}

@media only screen and (max-width: 780px) {
  .header-content {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .open .header-content {
    width: clamp(300px, 80vw, 1200px);
    display: flex;
    justify-content: space-between;
    margin: 0.5rem auto;
    align-items: flex-end;
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
}

@media only screen and (max-width: 600px) {
  #main-header {
    height: auto;
    margin-bottom: 0.5rem;
  }



  .nav-btns > * {
    margin-left: 0;
  }

  .open .nav-btns .nav {
    right: 0;
    top: 0;
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
}
</style>
