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
import { ref, onMounted } from 'vue';

// Optional: You can use a ref to conditionally apply the fade-in animation
const shouldAnimate = ref(true);

onMounted(() => {
  // Optional: Disable animation on subsequent route changes
  shouldAnimate.value = false;
});
</script>
<template>
 <div class="fade-container">
    <!-- <router-link to="/Form">Form</router-link> -->

    <Top />
    <Content />
    <Explore />
    <Participate /> 
     <Footer />
    <!-- <button @click="navigateToNotion">Notion</button> -->
  </div>
</template>

<style scoped>
.fade-container {
  animation: fade-in 2.5s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
</style>
