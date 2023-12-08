<template>
    <div class="body">
        <div class="whitespace">
        </div>

        <div class="section">
            <div class="title">
                <h1>
                    Are you ready to<span> build up</span> your coding skills?
                    Together, let's <span> BuildEMEA</span>

                </h1>
            </div>
            <div class="center-section">
                <div class="mockup"><img src="../../images//MOCKUP-ipad.png" class="ipad-image" /></div>
                <div>
                    <p>
                        <b>BuildEMEA</b> , organised by  <b>Connect</b> in collaboration with  <b>IEDC</b> and  <b>TinkerHub</b>, is the first ever
                        month-long  <b>codefest</b> conducted on  <b>EMEA campus</b> or any Arts and Science college. This is
                        a month completely dedicated to ideating, innovating, collaborating, and creating incredible
                        projects. Our goal is to open a doorway to the world of programming,help them explore the
                        possibilities and opportunities, and find their passion.  <b>Join us for a fun-filled month of learning,
                        growing, and working together!</b>
                    </p>
                </div>
            </div>
            <div class="counts-section">
                <div class="count">
                    <h2>#21</h2>
                    <p>Coding Days</p>
                </div>
                <div class="count">
                    <h2>#06</h2>
                    <p>Skilled Mentors</p>
                </div>
                <div class="count">
                    <h2>#08</h2>
                    <p>Live Events</p>
                </div>
            </div>
        </div>
        <div class="whitespace">
        </div>
    </div>
</template>
<script>
// no logics
</script>
<style scoped>
.body {
    background-color: #000;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}

.section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 40px;
    text-align: left;
    margin-top: 50px;
}

.title>h1 {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 30px;
}

.title>h1>span {
    color: #B90848;
}

.center-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0px 20px;
    gap: 0px;
    margin: 20px 0px;

}

.mockup {
    display: flex;
    align-items: center;
    justify-content: center;
}

.ipad-image {
    max-width: 350px;
}

.counts-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    color: white;
    width: 100%;
    padding: 0px 20px;
    margin: 10px 0px;
    margin-bottom: 50px;
}

.count {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.count>h2 {
    font-size: 28px;
    font-weight: bold;
    color: #B90848;
}

.count>p {
    font-weight: 600;
}

@media (max-width: 1350px) {
    .body {
        display: grid;
        grid-template-columns: auto;
    }

    .whitespace {
        display: none;
    }

}


/* responsive iteams off */



/* responsive designs */
@media (max-width: 750px) {
   
    .center-section {
    display: grid;
    grid-template-columns: 1fr ;
    align-items: center;
    padding: 0px 20px;
    gap: 15px;
    margin: 5px 0px;
}
.center-section p {
padding-left: 20px ;
}
.title>h1 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    line-height:28px;
    padding-left: 3px;
}
.counts-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    color: white;
    width: 100%;
    padding: 0px;
    margin: 40px 0px;
    margin-bottom: 50px;
    font-size: 20px;
}
.count>h2 {
    font-size: 35px;
}
    /* desktop screen off */
   
}
@media (max-width: 420px) {
    .ipad-image {
    max-width: 300px;
}
}
</style>