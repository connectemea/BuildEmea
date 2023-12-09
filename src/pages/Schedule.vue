<!-- Your main component file -->
<script setup>
import { useRouter } from 'vue-router';
import { scheduleData } from '../components/schedule-data/scheduleData.js';
import { onMounted } from 'vue';

const router = useRouter();

// const navigateToForm = () => {
//   router.push('/form');
// };
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="fade-container">
    <header>
      <router-link to="/">
        <img src="../images/header-logo.png" class="logo" />

      </router-link>

    </header>
    <!-- <div class="grid-box"> -->

      <ul class="border">
        <li v-for="(item, index) in scheduleData" :key="index">
          <div class="schedule-card">
            <h1> {{ item.Date }}</h1>
            <p>{{ item.section }}</p>

          </div>
        </li>

        <!-- <img src="../images/buildEMEAtext-logo.png" alt="logo" /> -->
      </ul>
      <!-- <div class="name-head"> -->
        <!-- <div class="name-image"> -->

        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->

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

header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
}

.logo {
  width: 120px;
  margin-left: 142px;
  cursor: pointer;

}

.grid-box {
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
.border::after {
  content: '';
  position: fixed;
  top: 0px;
  right: 10px;
  bottom: 0px;
  width: 60%; /* Adjust the width of the background */
  background-image: url('../images/buildEMEAtext-logo.png'); /* Set your desired background color */
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  margin: 80px 30px;
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
  font-size: 14px;
  color: #fff;
}
.schedule-card h1 {
  padding: 0;
  font-weight: 600;
  color: #fff;
}

/* .name-image {
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  padding: 20px;
} */
.name-image img{
  display: none;
  position: absolute;
  top: 0px;

}
/* .name-head {
  position: fixed;
  right: 0;
} */
@media (max-width:710px) {
  
.grid-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: -10px;
}
.logo {
  width: 120px;
  margin-left: 22px;
  cursor: pointer;

}
.border {
  margin-left: 80px;
  border-left: 5px solid #fff;
  height: 100%;
  padding: 0;
  position: relative;
  padding-top: 30px;
}
.border::after {
  content: '';
  position: fixed;
  top: 0px;
  right: 10px;
  bottom: 0px;
  width: 10%; /* Adjust the width of the background */
  background-image: url('../images/buildEMEtext-respo.png'); /* Set your desired background image */
  background-repeat: repeat-y;
  background-position: right;
  margin: 80px 30px;
}
.schedule-card {
  margin-left: 20px;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: #fff;
}

}
@media (max-width: 399px) {
  .logo {
  width: 120px;
  margin-left: -5px;
  cursor: pointer;

}
  .border {
  margin-left: 50px;
  border-left: 5px solid #fff;
  height: 100%;
  padding: 0;
  position: relative;
  padding-top: 30px;
}
.schedule-card {
  margin-left: 10px;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
}
</style>
