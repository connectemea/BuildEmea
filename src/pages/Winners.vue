<template>
  <div class="fade-container">
    <h1>Winners</h1>
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