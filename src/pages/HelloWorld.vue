<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToForm = () => {
  router.push('/form');
};
const navigateToNotion = () => {
  window.location.href = "https://www.google.com"; // Corrected the URL by adding 'https://'
};
</script>

<template>
 Explore page
</template>

<style scoped>

</style>


