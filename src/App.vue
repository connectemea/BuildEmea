<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { useRouter } from 'vue-router';
</script>

<template>
  <div>
    <router-link to="/">Home</router-link>&nbsp;&nbsp;
    <!-- <router-link to="/form">Form</router-link> -->

    <router-view />

   
  </div>
</template>

<style scoped>
/*  */
</style>
