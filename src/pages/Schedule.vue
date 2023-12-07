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
  <div class="fade-container">
     <header>
      <router-link to="/">
        <img src="../images/header-logo.png" class="logo"/>

      </router-link>
    
  </header>
<div class="grid-box">
 
  <ul class="border">
      <li v-for="(item, index) in scheduleData" :key="index">
        <div class="schedule-card">
          <h1> {{ item.Date }}</h1>
          <p>{{ item.section }}</p>

        </div>
      </li>

    </ul>
  <div class="name-image">
<!-- <img src="" alt="logo"/> -->
  </div>
</div>
   
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
header{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
}
.logo{
  width: 120px;
  margin-left: 145px;
  cursor: pointer;
 
}
.grid-box{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: -10px;
}
.border {
  margin-left: 200px;
  border-left: 5px solid #fff;
  height: 100%;
  padding: 0;
  position: relative;
  padding-top: 30px;
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
.name-image{
  position: relative;
}
</style>
