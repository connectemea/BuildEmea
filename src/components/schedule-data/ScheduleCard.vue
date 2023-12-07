<!-- ScheduleCard.vue -->
<template>
    <div class="schedule-card">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['title', 'description']);
  </script>
  
  <style scoped>
  .schedule-card {
    margin-left: 50px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .schedule-card p {
    padding: 0;
  }
  </style>
  
  <script>
  export const setup = () => {
    const scheduleData = [
      { title: 'Title 1', description: 'Description 1' },
      { title: 'Title 2', description: 'Description 2' },
      { title: 'Title 3', description: 'Description 3' },
      { title: 'Title 4', description: 'Description 4' },
    ];
  
    return {
      scheduleData,
    };
  };
  </script>
  