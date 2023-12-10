<script setup>
import { useRouter } from 'vue-router';


</script>

<template>
  <div>
    <!-- <header>
      <a href="#">
        <img src="/src/assets/vue.svg" alt="Vue logo" />
        layout example
        </a>
    </header> -->
    <!-- <router-link to="/">Home</router-link>&nbsp;&nbsp; -->
    <div class="responsive">
Cant open on mobile | responsive work did not finish yet
<br>
please open on desktop
    </div>
    <div class="body">

      <router-view />
      
    </div>

   
  </div>
</template>

<style>
/*  */
body{
        margin: 0;
        padding: 0;
        font-family: 'Sora', sans-serif;
        background-color: #000;
      }
      .responsive{
    display: none;
}
/* For WebKit browsers (Chrome, Safari) */
::-webkit-scrollbar {
    width: 12px;
    cursor: pointer;

}

::-webkit-scrollbar-thumb {
    background-color: #ddd; /* Color of the scrollbar thumb */
    border-radius: 6px;
    cursor: pointer;
}

::-webkit-scrollbar-track {
    background-color: #1a1a1a; /* Color of the scrollbar track */
}

/* For Firefox */
/* Note: Firefox supports a different syntax for scrollbar styling */
* {
    scrollbar-color: #B90848 #1a1a1a; /* thumb and track colors */
    scrollbar-width: thin;
}
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #B90848;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none; /* Initially hide the button */
}

/* Show the button on hover */
.back-to-top:hover {
  background-color: #8a0340;
}

/* @media (max-width: 700px) {
    .body{
        display: none;

    }
    .responsive{
        display:block;
        text-align: center;
        margin-top: 80px;
    }
   } */
</style>





