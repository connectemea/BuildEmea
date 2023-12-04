<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToForm = () => {
  router.push('/form');
};
</script>

<template>
   <video autoplay loop muted class="video-bg">
      <source src="../../public/callofduty.mp4" type="video/mp4">
    </video>
  <div class="card">
    HelloWorld <br />
    {{ msg }}
    <br />
    <button type="button" @click="navigateToForm">Register</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  min-height: 300px;
  min-width: 300px;
  background-color: #88888898;
}
.video-bg {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.6;
}
</style>


