<template>
   <div class="body">
      <div class="whitespace">

      </div>
      <div class="section">
         <div class="box-grid">

            <div class="redirect-boxs">
               <div class="explore-box">
                  <h2>
                     Explore Our
                     <br />
                     <span>
                        Events
                     </span>
                  </h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut labore etd
                  </p>
                  <hr />
                  <p class="show-more"> Show more<img /></p>
               </div>
               <div class="schedule-box">
                  <h2>
                     View event
                     <br />
                     <span>
                        Schedule
                     </span>
                  </h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut labore etd
                  </p>
                  <hr />
                  <p class="show-more">Show more <img /></p>
               </div>
            </div>
            <div class="tech-image">
               <img src="../../../public/tech-image.png" class="tech-logo"/>
            </div>
         </div>
      </div>
      <div class="whitespace">

      </div>
   </div>
</template>
<script>

</script>
<style scoped>
.body {
   background-color: #000;
   display: grid;
   grid-template-columns: 1fr 3fr 1fr;
   margin-bottom: 20px;
}

.box-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
}

.redirect-boxs {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 10px;
   gap: 40px;
}

.explore-box {
   border: 1px solid #B90848;
   padding: 20px;
   border-top-right-radius: 30px;
}

.explore-box>h2 {
   font-size: 25px;
   text-transform: uppercase;
   font-weight: 6000;
}

.schedule-box {
   background-color: #B90848;
   padding: 10px;
   border-top-right-radius: 30px;
}

.schedule-box>h2 {
   font-size: 25px;
   text-transform: uppercase;


}
.tech-image{
padding: 20px;
}
.tech-logo{
   border-radius: 60px;
}
.show-more{
   text-align: right;
   padding: 5px;
}

@media (max-width: 1350px) {
   .body {
      display: grid;
      flex-direction: column;
      grid-template-columns: auto;
   }

   .whitespace {
      display: none;
   }

}</style>