<template>
  <div class="fade-container">

    <NotFoundComponent />
  </div>
</template>

<script setup>
import NotFoundComponent from "../components/NotFound/404.vue";
</script>

<style scoped>
.fade-container {
  animation: fade-in 2s ease-in-out;
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
