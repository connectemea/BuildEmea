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
  /* Remove default padding from the <ul> element */
  position: relative;
  padding-top: 50px;
}

.border li {
  position: relative;
  list-style-type: none;
  padding-left: 25px;
  /* Adjust the space between the bullet point and the text */
  margin-left: -38px;
  display: flex;
  align-items: center;
}

.border li::before {
  content: '';
  /* Empty content to create a pseudo-element */
  display: inline-block;
  width: 20px;
  /* Adjust the width of the filled circle */
  height: 20px;
  /* Adjust the height of the filled circle */
  background-color: #ff005d;
  /* Change the color of the filled circle */
  border-radius: 50%;
  /* Make the filled circle round */
  margin-right: 10px;
  /* Adjust the space between the filled circle and the text */
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