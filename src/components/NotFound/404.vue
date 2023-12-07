<template>
    <div class="body">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <router-link to="/" class="link">Go to Home Page</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .body {
    margin: 0 auto;
    max-width: 960px;
    padding: 45px;
    text-align: center;
    margin-top: 50px;
  }
  h1 {
    font-size: 3em;
    font-weight: 300;
    line-height: 1em;
    text-align: center;
    
  }
  
  p {
    font-size: 1.2em;
    font-weight: 300;
    text-align: center;
  }
  
  .link {
    color: #B90848;
    font-weight: 400;
    text-align: center;
  }
  </style>
  