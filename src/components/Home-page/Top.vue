<template>
    
    <div class="body">
<div class="whitespace">
</div>
<div class="section">

        <header class="header">
            <div class="header-left">
                <img class="header-left-logo" src="../../../public/header-logo-new.png" alt=""/>
            </div>
            <div class="header-right">
                <p>Explore</p>
                <p>Schedule</p>
                <p>Participate</p>
            </div>
        </header>
        <div class="center-section">
            <img class="head-logo" src="../../../public/buildEMEA-1.png"/>
            <div class="location">
                <img src="../../../public/Vectorlocation.svg" alt="" class="location-logo"/>
                <p>EMEA College of Arts and Science</p>
            </div>
            <div class="date">
                <img src="../../../public/Vectordate.svg" alt="" class="date-logo"/>
                <p>07 DEC-05 JAN 2023</p>
            </div>
        </div>
        <div>
            <img src="../../../public/image-game.png" alt="" class="game-image"/>

        </div>
    </div>

<div  class="whitespace">
</div>
</div>

</template>
<script>
// no logics
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