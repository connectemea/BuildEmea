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
    window.open(link, '_blank');
};
</script>

<template>
    <div class="fade-container">
        <header>

            <router-link to="/" class="image-logo">
                <img src="../images/header-logo.webp" class="logo" />

            </router-link>
            <h1 class="heading">
                Projects
            </h1>
        </header>


        <div class="border">
            <ul v-for="(item, index) in ProjectsData" class="parent">
                <li class="project-card">
                    <div class="card-content">
                        <h2>0{{ item.id }}</h2>
                        <h1><span>Team</span>{{ item.title }}</h1>
                    </div>
                    <p class="project-choosed">{{ item.project }}</p>
                    <hr />
                    <div class="flex">
                        <p class="github">
                            <a :href="item.github" target="_blank">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="white"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.1406 41.0059C20.1406 40.7126 20.076 40.4228 19.9516 40.1573C19.8271 39.8917 19.6457 39.6567 19.4203 39.469C19.1949 39.2814 18.9309 39.1456 18.6472 39.0713C18.3634 38.997 18.0668 38.986 17.7783 39.0391C15.1602 39.5196 11.8545 39.5918 10.9756 37.1231C10.2092 35.2111 8.93975 33.5421 7.30178 32.2931C7.18492 32.2295 7.07353 32.1563 6.96878 32.0743C6.82543 31.6962 6.57081 31.3704 6.23851 31.1399C5.90621 30.9094 5.51185 30.7851 5.10744 30.7833H5.09768C4.56888 30.7831 4.06154 30.9924 3.68671 31.3654C3.31187 31.7384 3.10008 32.2447 3.09768 32.7735C3.08986 34.4044 4.71968 35.4493 5.38088 35.8028C6.16057 36.5862 6.78719 37.5083 7.22854 38.5216C7.95706 40.5685 10.0742 43.6739 16.1602 43.2736C16.1622 43.3439 16.1641 43.4103 16.1651 43.4708L16.1738 44.006C16.1738 44.5364 16.3846 45.0451 16.7596 45.4202C17.1347 45.7953 17.6434 46.006 18.1738 46.006C18.7043 46.006 19.213 45.7953 19.5881 45.4202C19.9631 45.0451 20.1738 44.5364 20.1738 44.006L20.1641 43.3693C20.1543 42.9903 20.1406 42.4414 20.1406 41.0059ZM41.4746 10.7539C41.5381 10.5039 41.6006 10.2265 41.6553 9.91404C41.9788 7.68521 41.6968 5.41042 40.8389 3.32804C40.7307 3.05656 40.5643 2.81205 40.3516 2.61164C40.1389 2.41123 39.8849 2.25978 39.6075 2.1679C38.8955 1.92766 36.2666 1.455 31.2393 4.6679C27.0604 3.68449 22.7102 3.68449 18.5313 4.6679C13.5244 1.50206 10.9092 1.93166 10.2041 2.15822C9.91985 2.24638 9.65891 2.39703 9.44042 2.59913C9.22193 2.80123 9.05143 3.04967 8.94142 3.32622C8.06603 5.44858 7.78711 7.76977 8.13478 10.0391C8.18362 10.295 8.23634 10.5313 8.29104 10.7481C6.63419 12.955 5.75166 15.6468 5.7803 18.4063C5.7749 19.0219 5.80327 19.6375 5.86526 20.25C6.53326 29.4551 12.5333 32.2188 16.7139 33.168C16.627 33.418 16.5479 33.6856 16.4776 33.9688C16.3522 34.4834 16.4361 35.0267 16.7108 35.4795C16.9854 35.9324 17.4284 36.2578 17.9427 36.3845C18.457 36.5112 19.0005 36.4288 19.4541 36.1553C19.9076 35.8819 20.2343 35.4397 20.3623 34.9258C20.4896 34.2594 20.8158 33.6473 21.2979 33.17C21.5894 32.9147 21.8005 32.5803 21.9054 32.2073C22.0103 31.8344 22.0046 31.439 21.8889 31.0692C21.7733 30.6994 21.5526 30.3712 21.2539 30.1245C20.9551 29.8779 20.5911 29.7233 20.2061 29.6797C13.2979 28.8907 10.2988 26.0762 9.84768 19.8829C9.79771 19.3923 9.77521 18.8994 9.7803 18.4063C9.74822 16.4396 10.398 14.5225 11.6192 12.9805C11.7419 12.8198 11.8726 12.6653 12.0108 12.5176C12.2556 12.2436 12.4203 11.9075 12.4866 11.546C12.5529 11.1846 12.5184 10.8119 12.3868 10.4688C12.2518 10.1079 12.1479 9.73606 12.0762 9.35746C11.9133 8.28089 11.9667 7.18264 12.2334 6.12698C13.9717 6.61792 15.6077 7.41706 17.0634 8.48634C17.3042 8.64668 17.5766 8.75339 17.8622 8.79922C18.1478 8.84506 18.4399 8.82894 18.7187 8.75198C22.7609 7.65497 27.0225 7.65567 31.0644 8.75398C31.3447 8.83086 31.6384 8.84605 31.9252 8.79851C32.2119 8.75097 32.485 8.64183 32.7255 8.4786C34.1745 7.40487 35.8036 6.59859 37.5361 6.09774C37.8016 7.12804 37.861 8.20065 37.7109 9.25398C37.6385 9.66905 37.5253 10.076 37.373 10.4688C37.2414 10.8119 37.2068 11.1846 37.2732 11.5461C37.3395 11.9075 37.5041 12.2437 37.749 12.5177C37.9033 12.6915 38.0576 12.879 38.1962 13.0548C39.4088 14.5706 40.0476 16.4657 40 18.4063C40.0036 18.9255 39.9785 19.4445 39.9248 19.961C39.4844 26.0723 36.4737 28.8887 29.5332 29.6797C29.1481 29.7236 28.7841 29.8784 28.4854 30.1253C28.1866 30.3722 27.9661 30.7006 27.8505 31.0705C27.7349 31.4405 27.7294 31.836 27.8344 32.2091C27.9395 32.5822 28.1507 32.9167 28.4424 33.1719C28.9397 33.6619 29.2666 34.2986 29.375 34.9883C29.5102 35.5237 29.5723 36.0749 29.5596 36.627V41.295C29.54 42.5899 29.54 43.5606 29.54 44.0059C29.54 44.5363 29.7507 45.045 30.1258 45.4201C30.5009 45.7952 31.0096 46.0059 31.54 46.0059C32.0705 46.0059 32.5792 45.7952 32.9542 45.4201C33.3293 45.045 33.54 44.5363 33.54 44.0059C33.54 43.5723 33.54 42.6211 33.5596 41.3262V36.627C33.5757 35.7426 33.4715 34.8602 33.25 34.0039C33.1866 33.7228 33.1091 33.4451 33.0176 33.1719C36.0601 32.6665 38.8245 31.0978 40.8188 28.7451C42.8131 26.3925 43.9079 23.4085 43.9082 20.3243C43.9741 19.6871 44.0047 19.0468 44 18.4063C44.0444 15.6438 43.1545 12.9473 41.4746 10.7539L41.4746 10.7539Z" />
                                </svg>
                            </a>
                        </p>
                        <p class="show-more" @click="handleLink(item.link)">Show more
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="icon">
                                <path
                                    d="M29.8423 0.874363C29.1409 0.874363 28.4684 1.14713 27.9725 1.63266C27.4765 2.11819 27.198 2.77671 27.198 3.46335V23.1138L5.27671 1.62517C4.77878 1.13765 4.10344 0.86377 3.39926 0.86377C2.69508 0.86377 2.01974 1.13765 1.52181 1.62517C1.02388 2.11268 0.744141 2.7739 0.744141 3.46335C0.744141 4.1528 1.02388 4.81401 1.52181 5.30153L23.4695 26.7642H3.39926C2.69795 26.7642 2.02536 27.037 1.52946 27.5225C1.03356 28.0081 0.75496 28.6666 0.75496 29.3532C0.75496 30.0399 1.03356 30.6984 1.52946 31.1839C2.02536 31.6694 2.69795 31.9422 3.39926 31.9422H29.8423C30.1878 31.9381 30.5292 31.8677 30.8471 31.7351C31.4932 31.4724 32.0067 30.9696 32.275 30.337C32.4105 30.0258 32.4824 29.6915 32.4866 29.3532V3.46335C32.4866 2.77671 32.208 2.11819 31.7121 1.63266C31.2162 1.14713 30.5436 0.874363 29.8423 0.874363Z"
                                    fill="white" />
                            </svg>
                        </p>
                    </div>


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
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.github:hover svg{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    fill: #fff;
}
.github:hover svg{
    fill: #e7f0c4;
   
}

.parent {
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

header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
}

.heading {
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
}

.project-card {
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
    box-shadow: 0 0 10px 0px #e70458;
}

.card-content {
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

.card-content h1 span{
    color: #ffffff;
    font-size: .8rem;
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

.show-more>.icon>path {
    transition: all 0.3s ease-in-out;

}

.icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    padding: 2px;
    transition: all 0.3s ease-in-out;

}

.project-choosed {
    color: #bdbdbd;
    font-size: .8rem;
    text-align: right;
    font-weight: 600;
    padding-right: 15px;
    width: 100%;
    transition: all 0.5s ease-in-out;
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
    background-image: url('../images/buildEMEAtext-logo.webp');
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
        background-image: url('../images/buildEMEtext-respo.webp');
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

    .card-content {
        gap: 10px;
    }

    .card-content h2,
    .card-content h1 {
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
