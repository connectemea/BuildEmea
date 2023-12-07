<!-- this page becuase of router didnt allow new pages or demo so.. -->
<!-- and now testing the hard code shecule page it styling -->
<!-- And to see this page -> localhost:3000/demo -->
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToForm = () => {
  router.push('/form');
};

</script>

<template>
  <div>
    <ul class="border">
      <li>
        <div class="schedule-card">
          <h1>xyz</h1>
          <p>abcd</p>

        </div>
      </li>
      <li>
        <div class="schedule-card">
          <h1>xyz</h1>
          <p>abcd</p>
        </div>
      </li>
      <li>
        <div class="schedule-card">
          <h1>xyz</h1>
          <p>abcd</p>

        </div>
      </li>
      <li>
        <div class="schedule-card">
          <h1>xyz</h1>
          <p>abcd</p>
        </div>
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

.schedule-card {
  margin-left: 50px;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
.schedule-card p{
  padding: 0;
}
</style>