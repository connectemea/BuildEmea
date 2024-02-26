<!-- Your main component file -->
<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
// winners images import
import Image1Team1 from '../images/winners/winner-1-team-1.png';
import Image2Team1 from '../images/winners/winner-2-team-1.png';
import Image3Team1 from '../images/winners/winner-3-team-1.png';
import Image1Team2 from '../images/winners/winner-1-team-2.png';
import Image2Team2 from '../images/winners/winner-2-team-2.png';
import Image3Team2 from '../images/winners/winner-3-team-2.png';
import Image4Team2 from '../images/winners/winner-4-team-2.png';
import Image5Team2 from '../images/winners/winner-5-team-2.png';
const router = useRouter();

onMounted(() => {
  window.scrollTo(0, 0);
});
const HandleProfile = (link) => {
  window.open(link, '_blank');
};

</script>

<template>
  <div class="fade-container">
    <header>

      <router-link to="/" class="image-logo">
        <img src="../images/header-logo.png" class="logo" />

      </router-link>
      <h1 class="heading">
        Winners
      </h1>
    </header>


    <div class="border">
      <section class="winner-parent">
        <div class="winner">
          <!-- Overall Winner section -->
          <h1>Overall Winner</h1>
          <div class="winner-card">
            <p><span>Team</span>Zero</p>
            <div class="images">
              <div class="flex">
                <div class="profile-card">
                  <img :src="Image1Team1" alt="winner-1-team-1" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/jasimrazi/')"/>
                  <div class="overlay"></div>
                  <h2 @click="HandleProfile('https://www.linkedin.com/in/jasimrazi/')">Mohammed Jasim</h2>
                  <p>BSc CS (3rd)</p>
                </div>
                <div class="profile-card">
                  <img :src="Image2Team1" alt="winner-1-team-1" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/favaz-said-100403254/')"/>
                  <h2 @click="HandleProfile('https://www.linkedin.com/in/favaz-said-100403254/')">Favaz</h2>
                  <p>BSc CS (3rd)</p>
                </div>
              </div>
              <div class="special2 profile-card">
                <img draggable="false" :src="Image3Team1" alt="winner-1-team-1" @click="HandleProfile()"/>
                <h2 @click="HandleProfile()">Gokul</h2>
                <p>BSc CS (3rd)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="winner">
          <!-- Best UI & Functionality section -->
          <h1>Best UI & Functionality</h1>
          <div class="winner-card">
            <p><span>Team</span>Hugs for bugs</p>
            <div class="images winner-2">
              <div class="flex-respo">
                <div class="flex">
                  <div class="profile-card">
                    <img :src="Image1Team2" alt="winner-1-team-2" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/muhammed-shamil-65878227a/')" />
                    <h2 @click="HandleProfile('https://www.linkedin.com/in/muhammed-shamil-65878227a/')">Muhammed Shamil</h2>
                    <p>BSc CS (1st)</p>
                  </div>
                  <div class="profile-card">
                    <img :src="Image2Team2" alt="winner-1-team-2" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/muhammed-saleel-cp-84064524b/')"/>
                    <h2  @click="HandleProfile('https://www.linkedin.com/in/muhammed-saleel-cp-84064524b/')">Muhammed Saleel</h2>
                    <p>BSc CS (2nd)</p>
                  </div>
                </div>
                <div class="special2 profile-card">
                  <img :src="Image3Team2" alt="winner-1-team-2" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/sibna-sherin/')"/>
                  <h2 @click="HandleProfile('https://www.linkedin.com/in/sibna-sherin/')">Sibna Sherin</h2>
                  <p>BSc CS (2nd)</p>
                </div>
              </div>

              <div class="flex special">
                <div class="profile-card">
                  <img :src="Image4Team2" alt="winner-1-team-2" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/shifna-shirin-9654b2255/')"/>
                  <h2  @click="HandleProfile('https://www.linkedin.com/in/shifna-shirin-9654b2255/')">Shifna Shirin</h2>
                  <p>BSc CS (2nd)</p>
                </div>
                <div class="profile-card">
                  <img :src="Image5Team2" alt="winner-1-team-2" draggable="false" @click="HandleProfile('https://www.linkedin.com/in/dayyan-ali/')"/>
                  <h2  @click="HandleProfile('https://www.linkedin.com/in/dayyan-ali/')">Dayyan Ali</h2>
                  <p>BSc CS (1st)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

.winner-parent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
}

.winner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  z-index: 999;
  margin: auto;
  width: fit-content;
}

.winner h1 {
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  color: #ffffff;
}

.winner-card {
  background-color: #fff;
  padding: 15px 25px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  min-width: 500px;
  max-width: 500px;
}

.profile-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  line-height: 12px;
  user-select: none;
}

.profile-card h2 {
  font-size: 12px !important;
  color: #ff005d;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s ease-in-out;


}

.profile-card h2:hover {
  color: #B90848;
}

.images img {
  width: 120px;
  height: 150px;
  transition: all 0.5s ease-in-out;

}

.profile-card img:hover {
  transform: translateY(-10px);
  cursor: pointer;
}

.profile-card p {
  font-size: 10px !important;
  font-weight: 500 !important;
  color: #000000 !important;
  margin: 0 !important;
}



.winner-card p {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #B90848;
  margin-bottom: 20px;
}

.winner-card span {
  font-size: .8rem;
  font-weight: bold;
  text-align: center;
}

.images {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 40px;
}

.winner-2 {
  display: flex;
  flex-direction: column;
}


.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.flex-respo {
  display: flex;
  gap: 20px;
}

.special {
  flex-basis: 100%;
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


  /* Adjust styles for mobile screens */
  .images {
    flex-wrap: wrap;
  }

  .images img {
    width: 100px;
    height: 130px;
  }

  .flex-respo {
    display: block;
  }

  .profile-card {
    width: 50%;
    text-align: center;
  }

  .special2.profile-card {
    width: 100%;
  }

  .winner-card {
    min-width: 350px;
    max-width: 350px;
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
