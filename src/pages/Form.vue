<template>
  <div class="fade-container">
    <div class="video-container">
      <video autoplay loop muted>
        <source src="../../public/black.mp4" type="video/mp4">
      </video>
    </div>

    <div style="height: 100vh;" class="body">
      <header>
        <router-link to="/">

          <img src="../images/header-logo.webp" class="logo" />
        </router-link>
      </header>
      <iframe title="Airtable Embed" class="airtable-embed" :src="airtableEmbedSrc" frameborder="0" allowfullscreen
        width="100%" height="100%" style="background: transparent; border: none;"></iframe>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      airtableEmbedSrc: "https://airtable.com/apps59e0jyPALC9vi/shrjOa1kpcMMcH6v2",
      // airtableEmbedSrc: "https://sharp-bobcat-af1.notion.site/Dashboard-92a9fc045b184f50a1709c34d1aeccfc", notion 
    };
  },
};
</script>
  
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

.body {
  /* background-color: #000; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo {
  width: 100px;
  cursor: pointer;
}

/* For WebKit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #ddd;
  /* Color of the scrollbar thumb */
  border-radius: 6px;
}

::-webkit-scrollbar-track {
  background-color: #1a1a1a;
  /* Color of the scrollbar track */
}

/* For Firefox */
/* Note: Firefox supports a different syntax for scrollbar styling */
* {
  scrollbar-color: #B90848 #1a1a1a;
  /* thumb and track colors */
  scrollbar-width: thin;
}

.airtable-embed {
  background: transparent;
  border: none;
  max-width: 700px;
  border-radius: 10px;
  margin: 10px;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
  