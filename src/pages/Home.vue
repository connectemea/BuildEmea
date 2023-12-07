<script setup>
import { useRouter } from 'vue-router';
import Top from '../components/Home-page/Top.vue';
import Content from '../components/Home-page/Content.vue';
import Explore from '../components/Home-page/Explore.vue';
import Participate from '../components/Home-page/participate.vue';
import Footer from '../components/Home-page/Footer.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const shouldAnimate = ref(true);
// const shouldShowBackToTop = ref(false);
const router = useRouter();

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', handleScroll);
// });

// const handleScroll = () => {
//   // Show the Back to Top button when scrolling down
//   shouldShowBackToTop.value = window.scrollY > 200;
// };

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };


const navigateToForm = () => {
  router.push('/Form');
};

// const navigateToNotion = () => {
//   window.location.href = "https://www.google.com"; 
// };


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
     <!-- <button @click="scrollToTop" class="back-to-top" v-show="shouldShowBackToTop">
      Back to Top
    </button> -->
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
/* .back-to-top {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #B90848;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
}

Show the button on hover
.back-to-top:hover {
  background-color: #8a0340;
} */
</style>
