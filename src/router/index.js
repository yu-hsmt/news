import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import News from '../views/News.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
