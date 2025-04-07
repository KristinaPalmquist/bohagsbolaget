<script setup>


// import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';



import NavLinks from '@/components/NavLinks.vue';

const router = useRouter();
const route = { name: 'Home', path: '/' };


const { t } = useI18n();

// const isDarkMode = ref(
//   document.documentElement.getAttribute('data-theme') === 'dark'
// );

// const logo = computed(() => {
//   return isDarkMode.value
//     ? 'url("/assets/logos/white_text_transparent_bg.png")'
//     : 'url("/assets/logos/black_text_transparent_bg.png")';
// });

const handleRouting = (event, path) => {
  event.preventDefault();
  router.push(path);
};

// const observeThemeChange = () => {
//   const observer = new MutationObserver(() => {
//     isDarkMode.value =
//       document.documentElement.getAttribute('data-theme') === 'dark';
//   });

//   observer.observe(document.documentElement, {
//     attributes: true,
//     attributeFilter: ['data-theme'],
//   });
// };

// onMounted(() => {
//   observeThemeChange();
// });
</script>

<template>
  <header id="header-view">
    <div class="header-content ">
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

</style>
