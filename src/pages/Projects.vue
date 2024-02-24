<!-- Your main component file -->
<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ProjectsData } from '../components/project-data/ProjectsData.js';
const router = useRouter();

onMounted(() => {
    window.scrollTo(0, 0);
});
const handleLink = (link) => {
   window.location.href = "https://"+link;
};
</script>

<template>
    <div class="fade-container">
        <header>
          
            <router-link to="/" class="image-logo">
                <img src="../images/header-logo.png" class="logo" />

            </router-link>
            <h1 class="heading">
            Projects
        </h1>
        </header>

        
        <div class="border">
            <ul @click="handleLink(item.link)" v-for="(item ,index) in ProjectsData" class="parent">
                <li class="project-card">
                    <div class="card-content">
                        <h2>0{{ item.id }}</h2>
                        <h1>Project Name</h1>
                    </div>
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

                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.fade-container {
    animation: fade-in 2.5s ease-in-out;
    padding: 10px;
}

@keyframes fade-in {
    from {
        opacity: 0.1;
    }

    to {
        opacity: 1;
    }
}
.parent{
    list-style: none;
    display: flex;
    flex-direction: row;
    max-width: 800px;
    margin: 0 auto;
    padding: 0px 40px;
    z-index: 999;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
}
.parent:nth-child(even) {
    flex-direction: row-reverse;
}
header{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
}
.heading{
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
}
.project-card{
    background-image: linear-gradient(180deg, #e20758, #7a0933);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    width: 400px;
    padding: 10px;
    margin-bottom: 50px;
    border-top-right-radius: 50px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    z-index: 999;

}
.project-card:hover {
    scale: 1.05;
    box-shadow:  0 0 10px 0px #e70458;
}
.card-content{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 350px;
    padding: 15px;
    border-top-right-radius: 50px;
}
.card-content h2 {
    color: #000000;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}
.card-content h1 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.logo {
    width: 120px;
    cursor: pointer;
    z-index: 1;
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
   transition: all 0.3s ease-in-out;

}


.border {
    height: 100%;
    padding: 0;
    position: relative;
}


.border::after {
    content: '';
    position: fixed;
    top: 0px;
    right: 10px;
    bottom: 0px;
    width: 60%;
    /* Adjust the width of the background */
    background-image: url('../images/buildEMEAtext-logo.png');
    /* Set your desired background color */
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    margin: 80px 30px;
}


@media (max-width:710px) {

    .logo {
        width: 120px;
        margin-left: 22px;
        cursor: pointer;

    }
   
    .border::after {
        content: '';
        position: fixed;
        top: 0px;
        right: 10px;
        bottom: 0px;
        width: 10%;
        /* Adjust the width of the background */
        background-image: url('../images/buildEMEtext-respo.png');
        /* Set your desired background image */
        background-repeat: repeat-y;
        background-position: right;
        margin: 80px 30px;
    }


}

@media (max-width: 500px) {
    .project-card {
        padding: 10px;
    }
    .show-more {
        padding: 2px;
        font-size: 15px;
    }
    .icon {
        width: 15px;
        height: 15px;
    }
    .card-content{
        gap: 10px;
    }
    .card-content h2,
    .card-content h1{ 
        font-size: 1rem;
    }
}
@media (max-width: 399px) {
    .logo {
        width: 120px;
        margin-left: -5px;
        cursor: pointer;

    }
}
</style>
