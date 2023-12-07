<!-- Your main component file -->
<script setup>
import { useRouter } from 'vue-router';
import { setup as scheduleCardSetup } from '../components/schedule-data/ScheduleCard.vue'; // Adjust the path accordingly
const router = useRouter();
const { scheduleData } = scheduleCardSetup();

const navigateToForm = () => {
  router.push('/form');
};
</script>

<template>
  <div>
    <ul class="border">
      <li v-for="(schedule, index) in scheduleData" :key="index">
        <ScheduleCard :title="schedule.title" :description="schedule.description" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.border {
  margin-left: 200px;
  border-left: 5px solid #fff;
  height: 100vh;
  padding: 0;
  position: relative;
  padding-top: 50px;
}

.border li {
  position: relative;
  list-style-type: none;
  padding-left: 25px;
  margin-left: -38px;
  display: flex;
  align-items: center;
}

.border li::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ff005d;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
