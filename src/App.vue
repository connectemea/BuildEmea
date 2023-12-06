<script setup>
import HelloWorld from './pages/HelloWorld.vue';
import { useRouter } from 'vue-router';
</script>

<template>
  <div>
    <!-- <header>
      <a href="#">
        <img src="/src/assets/vue.svg" alt="Vue logo" />
        layout example
        </a>
    </header> -->
    <!-- <router-link to="/">Home</router-link>&nbsp;&nbsp; -->
    <div class="responsive">
Cant open on mobile | responsive work did not finish yet
<br>
please open on desktop
    </div>
    <router-view />

   
  </div>
</template>

<style scoped>
/*  */
body{
        margin: 0;
        padding: 0;
        font-family: 'Sora', sans-serif;
      }
      .responsive{
    display: none;
}

@media (max-width: 700px) {
    .body{
        display: none;

    }
    .responsive{
        display:block;
        text-align: center;
        margin-top: 80px;
    }
   }
</style>
