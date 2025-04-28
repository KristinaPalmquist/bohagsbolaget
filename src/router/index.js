import { createWebHistory, createRouter } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFound from '@/views/NotFound.vue';
import TestimonialsView from '../views/TestimonialsView.vue';
import QuestionsView from '../views/QuestionsView.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/testimonials',
    component: TestimonialsView,
  },
  {
    path: '/questions',
    component: QuestionsView,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
