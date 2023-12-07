<template>
    
    <div class="body">
<div class="whitespace">
</div>
<div class="section">

        <header class="header">
            <div class="header-left">
                <router-link to="#">
                    <img class="header-left-logo" src="/header-logo-new.png" alt=""/>
                </router-link>

            </div>
            <div class="header-right">
                
                <router-link to="#explore" @click="scrollToSection('#explore')" class="router-link">Explore</router-link>
      <router-link to="schedule"  class="router-link">Schedule</router-link>
      <router-link to="#participate" @click="scrollToSection('#participate')" class="router-link">Participate</router-link>
            </div>
        </header>
        <div class="center-section">
            <img class="head-logo" src="/buildEMEA-1.png"/>
            <div class="location">
                <img src="/Vectorlocation.svg" alt="" class="location-logo"/>
                <p>EMEA College of Arts and Science</p>
            </div>
            <div class="date">
                <img src="/Vectordate.svg" alt="" class="date-logo"/>
                <p>07 DEC-05 JAN 2023</p>
            </div>
        </div>
        <div>
            <img src="/image-game.png" alt="" class="game-image"/>

        </div>
    </div>

<div  class="whitespace">
</div>
</div>

</template>
<script>
// no logics full chatgbt
export default {
  methods: {
    // Function to smoothly scroll to a target section
    scrollToSection(target) {
      const element = document.querySelector(target);
      if (element) {
        this.scrollTo(element.offsetTop, 1000); // Adjust the duration (in milliseconds) as needed
      }
    },
    // Function to scroll to a specific position with a smooth transition
    scrollTo(to, duration) {
      const start = window.scrollY;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = this.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };

      animateScroll();
    },
    // Easing function for smooth scrolling
    easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  }
};
</script>
<style scoped>
.body {
    background-color: #B90848;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}


/* header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: #B90848;
}
.header-left{
flex: 1;
}
.header-left-logo{
    width: 120px;
    height: auto;
    padding: 10px;
}
.header-right{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    color: white;
}
.router-link {
    text-decoration: none;
    color: white;
    position: relative;
    cursor: pointer;
    transition: color 0.3s;
}

.router-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #f8ffdd;
    transition: width 0.3s;
}



.router-link:hover::after {
    width: 100%;
}

.router-link.active {
    font-weight: bold; 
}

.router-link.active::after {
    width: 100%;
}

/* main center content */
.center-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.head-logo{
    width: 500px;
}
.location{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    margin: 10px;
    margin-top: 1px;
    padding: 5px 25px;
    border: 1px solid white;
    border-radius: 50px;
}
.location-logo{
    width: 20px;
    height: auto;
    margin-right: 12px;
}
.date{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    margin: 10px;
    margin-top: 1px;
}
.date-logo{
    width: 20px;
    height: auto;
    margin-right: 12px;
}
.game-image{
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 0px 25px;
    border-top-left-radius: 60px ;
    border-top-right-radius:60px ;
}

@media (max-width: 1350px) {
    .body {
        display: grid;
        flex-direction: column;
        grid-template-columns: auto;
    }
    .whitespace{
        display: none;
    }
   
}






</style>