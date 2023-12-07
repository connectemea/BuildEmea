<!-- Your main component file -->
<script setup>
import { useRouter } from 'vue-router';
import { scheduleData } from '../components/schedule-data/scheduleData.js';

const router = useRouter();

// const navigateToForm = () => {
//   router.push('/form');
// };

</script>

<template>
  <div>
    <ul class="border">
      <li v-for="(item, index) in scheduleData" :key="index">
        <div class="schedule-card">
          <h1> {{ item.Date }}</h1>
          <p>{{ item.section }}</p>

        </div>
      </li>

    </ul>
  </div>
</template>

<style scoped>
.border {
  margin-left: 200px;
  border-left: 5px solid #fff;
  height: 100%;
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
