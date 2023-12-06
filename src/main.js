import { createApp } from 'vue'
import './style.css'
import '/src/assets/css/tailwind.css';
import App from './App.vue';
import HelloWorld from './pages/HelloWorld.vue';
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';
import NotFound from './pages/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/participate', component: Form },
  { path: '/Explore', component: HelloWorld },
  { path: '/form', component: Form },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
