<template>
   <div class="body">
      <!-- <div class="whitespace">

      </div> -->
      <div class="section" id="explore">
         <div class="box-grid">

            <div class="redirect-boxs">
               <div class="explore-box">
                  <div class="title-head">
                     <h2>
                        Explore Our
                        <br />
                        <span class="explore-span">
                           Events
                        </span>
                     </h2>
                  </div>
                  <div class="content-info">
                     <p>

                        Discover even more exciting details !
                     </p>
                     <hr />
                     <a href="https://sharp-bobcat-af1.notion.site/BuildEMEA-7dc7f5135e434be8b40e64b9537f297f?pvs=4"
                        :target="'_blank'">
                        <p class="show-more">Show more
                           <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                              class="icon">
                              <path
                                 d="M29.8423 0.874363C29.1409 0.874363 28.4684 1.14713 27.9725 1.63266C27.4765 2.11819 27.198 2.77671 27.198 3.46335V23.1138L5.27671 1.62517C4.77878 1.13765 4.10344 0.86377 3.39926 0.86377C2.69508 0.86377 2.01974 1.13765 1.52181 1.62517C1.02388 2.11268 0.744141 2.7739 0.744141 3.46335C0.744141 4.1528 1.02388 4.81401 1.52181 5.30153L23.4695 26.7642H3.39926C2.69795 26.7642 2.02536 27.037 1.52946 27.5225C1.03356 28.0081 0.75496 28.6666 0.75496 29.3532C0.75496 30.0399 1.03356 30.6984 1.52946 31.1839C2.02536 31.6694 2.69795 31.9422 3.39926 31.9422H29.8423C30.1878 31.9381 30.5292 31.8677 30.8471 31.7351C31.4932 31.4724 32.0067 30.9696 32.275 30.337C32.4105 30.0258 32.4824 29.6915 32.4866 29.3532V3.46335C32.4866 2.77671 32.208 2.11819 31.7121 1.63266C31.2162 1.14713 30.5436 0.874363 29.8423 0.874363Z"
                                 fill="white" />
                           </svg>
                        </p>
                     </a>

                  </div>

               </div>
               <div class="schedule-box">
                  <div class="title-head">
                     <h2>
                        <span class="Schedule-span">

                           View event
                        </span>

                        <br />
                        Schedule
                     </h2>
                  </div>
                  <div class="content-info">
                     <p>
                        Keep up with our Timeline!
                     </p>
                     <hr />
                     <router-link to="/schedule">
                        <p class="show-more">Show more
                           <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                              class="icon">
                              <path
                                 d="M29.8423 0.874363C29.1409 0.874363 28.4684 1.14713 27.9725 1.63266C27.4765 2.11819 27.198 2.77671 27.198 3.46335V23.1138L5.27671 1.62517C4.77878 1.13765 4.10344 0.86377 3.39926 0.86377C2.69508 0.86377 2.01974 1.13765 1.52181 1.62517C1.02388 2.11268 0.744141 2.7739 0.744141 3.46335C0.744141 4.1528 1.02388 4.81401 1.52181 5.30153L23.4695 26.7642H3.39926C2.69795 26.7642 2.02536 27.037 1.52946 27.5225C1.03356 28.0081 0.75496 28.6666 0.75496 29.3532C0.75496 30.0399 1.03356 30.6984 1.52946 31.1839C2.02536 31.6694 2.69795 31.9422 3.39926 31.9422H29.8423C30.1878 31.9381 30.5292 31.8677 30.8471 31.7351C31.4932 31.4724 32.0067 30.9696 32.275 30.337C32.4105 30.0258 32.4824 29.6915 32.4866 29.3532V3.46335C32.4866 2.77671 32.208 2.11819 31.7121 1.63266C31.2162 1.14713 30.5436 0.874363 29.8423 0.874363Z"
                                 fill="white" />
                           </svg>
                        </p>
                     </router-link>

                  </div>

               </div>
            </div>
            <div class="tech-image">
               <div class="tech-logo">
                  <!-- <video class="tech-video" loop autoplay muted>
                     <source src="../../assets/coding.mp4" type="video/mp4">
                     <img src="../../images/tech-image.png" class="tech-logo" />
                  </video>
                  <video class="tech-video responsive" loop autoplay muted>
                     <source src="../../assets/coding.mp4" type="video/mp4">
                     <img src="../../images/tech-image.png" class="tech-logo" />
                  </video>
                  <video class="tech-video responsive" loop autoplay muted>
                     <source src="../../assets/coding.mp4" type="video/mp4">
                     <img src="../../images/tech-image.png" class="tech-logo" />
                  </video> -->
                  <img src="../../images/explore.webp" class="tech-logo" />
               </div>
            </div>

         </div>
      </div>
      <!-- <div class="whitespace">

      </div> -->
   </div>
</template>
<script>
// import { useRouter } from 'vue-router';

// const router = useRouter();

// const navigateToNotion = () => {
//   router.push('/form');
// };
// const navigateToNotion = () => {
//   window.location.href = 'https://sharp-bobcat-af1.notion.site/Dashboard-92a9fc045b184f50a1709c34d1aeccfc';
// };
</script>
<style scoped>
.body {
   background-color: #000;
   display: grid;

   /* grid-template-columns: 1fr 3fr 1fr; */
}

.box-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   width: 100%;
   max-width: 1200px;
   margin: auto;

}

.redirect-boxs {
   display: grid;
   grid-template-columns: 1fr;
   align-items: center;
   justify-content: center;
   padding: 30px;
   gap: 20px;
   height: 100%;
}

.explore-box {
   border: 1px solid #B90848;
   padding: 10px 25px;
   border-top-right-radius: 30px;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}


.schedule-box {
   background-color: #B90848;
   padding: 10px 20px;
   border-top-right-radius: 30px;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}


.title-head {
   padding: 10px;
   font-size: 25px;
   text-transform: uppercase;
   font-weight: 600;
}

.Schedule-span {
   color: #000;
}

.explore-span {
   color: #B90848;
}

.content-info {
   text-align: left;
   padding: 10px;
   color: #fff;
}

hr {
   margin-top: 5px;
   width: 98%;
   height: 5px;
   font-weight: bold;
}

.show-more {
   padding: 5px 10px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   cursor: pointer;
   transition: all 0.3s ease-in-out;
   color: #fff;
}

.show-more:hover {
   color: #e7f0c4;
}

.show-more:hover>.icon>path {
   fill: #e7f0c4;
}
.show-more >.icon>path {
   transition: all 0.3s ease-in-out;

}

.icon {
   width: 20px;
   height: 20px;
   margin-left: 10px;
   padding: 2px;
}

.tech-image {
   padding: 10px;
   height: 90%;
   overflow: hidden !important;
   margin: auto;
}

.tech-logo {
   border-radius: 10px;
   height: fit-content;
   overflow: hidden;
   max-width: 560px;
   max-height: 500px;
   width: 95%;
   height: 100%;
}

.tech-video {
   object-fit: cover;
   overflow: hidden;
}

.title-head {
   color: #fff;
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

}

/* responsive iteams off */

.responsive {
   display: initial;
}

/* responsive designs */
@media (max-width: 750px) {
   .responsive {
      display: none;
   }

   .box-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   .tech-image {
      padding: 10px;
      height: 300px;
      width: 400px;
      margin: auto;
      padding-top: 0;
   }

   .tech-image img {
      width: 100%;
   }

   .schedule-box {
      padding-bottom: 0;
      z-index: 2;
   }

   .tech-logo {
      width: 100%;
      height: 250px;
      margin: auto;
   }
}

@media (max-width: 400px) {
   .tech-image {
      width: 340px;
   }
   .tech-logo {
      width: 320px;
   }

}
@media (max-width: 370px) {
   .tech-logo {
      border-radius: 10px;
      width: 300px;
   }
}
</style>