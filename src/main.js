import { createApp } from 'vue'
import './style.css'
import '/src/assets/css/tailwind.css';
import App from './App.vue';
import schedule from './pages/Schedule.vue';
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';
import NotFound from './pages/NotFound.vue';
import Projects from './pages/Projects.vue';
import Winners from './pages/Winners.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/participate', component: Form },
  { path: '/schedule', component: schedule },
  { path: '/formhide', component: Form },
  { path: '/projects', component: Projects },
  { path: '/winners', component: Winners },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
