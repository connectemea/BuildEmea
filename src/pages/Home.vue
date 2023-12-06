<script setup>
import { useRouter } from 'vue-router';
import Top from '../components/Home-page/Top.vue';
import Content from '../components/Home-page/Content.vue';
import Explore from '../components/Home-page/Explore.vue';
import Participate from '../components/Home-page/participate.vue';
import Footer from '../components/Home-page/Footer.vue';
const router = useRouter();

const navigateToForm = () => {
  router.push('/Form');
};

// const navigateToNotion = () => {
//   window.location.href = "https://www.google.com"; 
// };

</script>
<template>
  <div>
    <!-- <router-link to="/Form">Form</router-link> -->

    <Top />
    <Content />
    <Explore />
    <Participate />
    <Footer />
    <!-- <button @click="navigateToNotion">Notion</button> -->
  </div>
</template>
