import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Form from './components/Form.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/form', component: Form },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
