<script setup>
import { useRouter } from 'vue-router';
import Top from '../components/Home-page/Top.vue';
import Content from '../components/Home-page/Content.vue';
import Explore from '../components/Home-page/Explore.vue';
import Participate from '../components/Home-page/participate.vue';
import Footer from '../components/Home-page/Footer.vue';
import ProjectCard from '../components/Home-page/ProjectCard.vue';
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

// const isEventFinished = ref(false); // Set to true when event is finished
// const isEventFinishedOverlay = ref(true); // Set to false to hide the overlay
// setTimeout(() => {
//   isEventFinished.value = true;
// }, 1000);
// const closeAlert = () => {
//   isEventFinished.value = false;
//   isEventFinishedOverlay.value = false;
// };

// const navigateToWinners = () => {
//   // Navigate to winners page
//   router.push('/winners');
// };

// const navigateToProjects = () => {
//   // Navigate to projects page
//   router.push('/projects');
// };

// onMounted(() => {
//   // Optional: Disable animation on subsequent route changes
//   shouldAnimate.value = false;
// });

</script>
<template>
  <div class="fade-container">
    <!-- <router-link to="/Form">Form</router-link> -->
    <!-- <div class="alert-overlay" v-if="isEventFinishedOverlay">
    <div class="alert" ref="alert" v-if="isEventFinished">
      <button @click="closeAlert" class="close-button">&times;</button>
      <h2>Event is finished!</h2>
      <p>Show winners or projects here</p>
      <div class="button-container">
        <button @click="navigateToWinners" class="navigate-button">Winners</button>
        <button @click="navigateToProjects" class="navigate-button">Projects</button>
      </div>
    </div>
  </div> -->

    <Top />
    <Content />
    <Explore />
    <Participate />
    <ProjectCard />
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
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.alert {
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  animation: slideIn 0.8s ease-out;
}

@keyframes slideIn {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0);
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
}

.button-container {
  margin-top: 20px;
}

.navigate-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigate-button:hover {
  background-color: #0056b3;
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
