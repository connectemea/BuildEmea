<template>
    <div style="height: 100vh;">
      <iframe
        title="Airtable Embed"
        class="airtable-embed"
        :src="airtableEmbedSrc"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
        style="background: transparent; border: none;"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        airtableEmbedSrc: "https://airtable.com/embed/appU9be36Hoc4MSRY/pagiKGjledhDuoQgo/form",
      };
    },
  };
  </script>
  
  <style scoped>
  .airtable-embed{
    background: transparent;
    border: none;
    max-width: 700px;
    border-radius: 10px;
    margin: 10px;
  }
  /* Add any component-specific styles here */
  </style>
  