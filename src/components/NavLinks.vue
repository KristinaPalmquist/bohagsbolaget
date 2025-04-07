<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
// import LanguageToggle from '@/components/LanguageToggle.vue';
// import ThemeToggle from './ThemeToggle.vue';

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

import { onMounted } from 'vue';

onMounted(() => {
  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((details) => {
    details.addEventListener('toggle', (event) => {
      const content = details.querySelector('.details-content');

      if (details.open) {
        // Smoothly open: Set max-height to the scrollHeight
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        // Smoothly close: Temporarily set max-height to scrollHeight, then to 0
        content.style.maxHeight = `${content.scrollHeight}px`;
        setTimeout(() => {
          content.style.maxHeight = '0px';
        }, 0); // Delay to allow the transition to take effect
      }
    });
  });
});
</script>

<template>
  <div id="main-navbar" class="component-container">
    <nav id="full-menu">
      <div class="link" v-for="route in routes" :key="route.name">
        <a href="#" @click="handleRouting($event, route.path)">
          <span class="navbar-item"> {{ route.name }}</span>
        </a>
      </div>
      <!-- <LanguageToggle />
      <ThemeToggle /> -->
    </nav>
    <!-- <nav id="two-row-menu">
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
    </nav> -->
    <nav id="hidden-menu">
      <details class="menu-details">
        <summary class="arrow">
          <!-- Custom arrow (no default arrow) -->
          <span class="custom-arrow"></span>
        </summary>
        <div class="details-content">
          <div class="link" v-for="route in routes" :key="route.name">
            <a href="#" @click="handleRouting($event, route.path)">
              <span class="navbar-item"> {{ route.name }}</span>
            </a>
          </div>

          <!-- <div id="icons">
        <LanguageToggle />
        <ThemeToggle />
      </div> -->
        </div>
      </details>
    </nav>
  </div>
</template>

<style scoped>
#main-navbar {
  padding-top: 1vh;
  padding-bottom: 2vh;
}

#full-menu {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5vh;
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

#hidden-menu {
  display: none;
}

/* Remove the default arrow from the <summary> element */
summary {
  list-style: none; /* Remove default arrow */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background: none;
}

/* Custom arrow container */
.custom-arrow {
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Arrow lines */
.custom-arrow::before,
.custom-arrow::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: hotpink;
  transition: transform 0.3s ease;
}

/* Top line of the arrow */
.custom-arrow::before {
  transform: translateX(-6px) rotate(45deg); /* Default arrow pointing down */
}

/* Bottom line of the arrow */
.custom-arrow::after {
  transform: translateX(6px) rotate(-45deg); /* Default arrow pointing down */
}

/* When <details> is open, transform the arrow into an "X" */
details[open] .custom-arrow::before {
  transform: rotate(45deg); /* Top line of the "X" */
}

details[open] .custom-arrow::after {
  transform: rotate(-45deg); /* Bottom line of the "X" */
}

/* Sliding content */
.details-content {
  overflow: hidden; /* Hide overflowing content during animation */
  max-height: 0; /* Start with max-height 0 */
  transition: max-height 1s ease; /* Smooth height transition */
}

/* When <details> is open, animate the max-height */
details[open] .details-content {
  max-height: 600px; /* Set a large enough max-height to accommodate content */
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

  .menu-details {
    text-align: center;
  }

  .link {
    display: flex;
    align-items: center;
  }

  .link a {
    margin: 0 auto;
  }

  .link a span {
    text-align: center;
  }
}
</style>
