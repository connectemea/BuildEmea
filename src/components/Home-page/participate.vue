<template>
    <div class="body">

        <div class="whitespace">
        </div>
        <div class="section" id="participate">
            <div class="card">
<div class="overlay">

</div>
                <!-- <img src="../../images/participate-image.png" class="participate-image" /> -->
                <div class="card-contnet">
                    <p>FOCUS, INTERACT, CREATE.</p>
                    <h2>buildEMEA CODEFEST</h2>
                    <!-- <router-link to="/form" class="button"> -->
                    <a href="https://airtable.com/apps59e0jyPALC9vi/shrjOa1kpcMMcH6v2" class="button">

                        Participate now
                        <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="arrow-logo">
                            <path
                                d="M46.6195 2.48731C46.23 1.569 45.4846 0.839247 44.5467 0.457883C44.0852 0.265309 43.5896 0.163164 43.088 0.157227H4.70304C3.68501 0.157227 2.70867 0.55318 1.98881 1.25798C1.26896 1.96278 0.864542 2.9187 0.864542 3.91543C0.864542 4.91217 1.26896 5.86809 1.98881 6.57289C2.70867 7.27769 3.68501 7.67364 4.70304 7.67364H33.8373L1.97771 38.8292C1.61793 39.1786 1.33237 39.5942 1.13749 40.0522C0.942618 40.5102 0.842285 41.0014 0.842285 41.4975C0.842285 41.9936 0.942618 42.4849 1.13749 42.9428C1.33237 43.4008 1.61793 43.8165 1.97771 44.1658C2.33455 44.5181 2.75909 44.7977 3.22684 44.9885C3.6946 45.1793 4.19631 45.2775 4.70304 45.2775C5.20977 45.2775 5.71148 45.1793 6.17924 44.9885C6.647 44.7977 7.07154 44.5181 7.42838 44.1658L39.2495 12.9727V41.4975C39.2495 42.4942 39.654 43.4502 40.3738 44.155C41.0937 44.8598 42.07 45.2557 43.088 45.2557C44.1061 45.2557 45.0824 44.8598 45.8023 44.155C46.5221 43.4502 46.9265 42.4942 46.9265 41.4975V3.91543C46.9205 3.42432 46.8162 2.93913 46.6195 2.48731Z"
                                fill="#000" />
                        </svg>
                    </a>

                </div>


            </div>
            <div class="community">
                <div><img src="../../images/tinkerhub-logo.png" class="community-logo" /></div>
                <div><img src="../../images/connect-logo.png" class="community-logo" /></div>
                <div><img src="../../images/iedc-logo.png" class="community-logo" /></div>
            </div>
        </div>

        <div class="whitespace">
        </div>
    </div>
</template>
<script></script>

<style scoped>
.body {
    background-color: #000;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}

.section {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    color: white;
    padding: 10px 20px;
}

.card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    position: relative;
    height: 450px;
    background-image: url("../../images/participate-image.png");
    border-radius: 70px;
    background-size: cover;
}
.overlay{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 70px;
    background-color: #FF005C;
    opacity: 0.4;
}
/* .participate-image {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-color: #ff005d48;
    display: none;
} */

.card-contnet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    margin: auto;
}

.card-contnet>p {
    font-size: 20px;
    margin-bottom: 5px;
    margin-top: -90px;
    word-spacing: 30px;
    font-size: 22px;
    font-weight: normal;
    text-transform: uppercase;
}

.card-contnet>h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;
    word-spacing: 10px;

}

.card-contnet>.button {
    background-color: #ffffff;
    padding: 8px 20px;
    border-radius: 0;
    border-top-right-radius: 20px;
    color: #000;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: all 0.3s ease-in-out;
}

.card-contnet>.button:hover {
    background-color: #ff005d;
    color: #fff;
}

.arrow-logo {
    width: 20px;
    padding: 2px;
    margin-left: 15px;
    transition: all 0.3s ease-in-out;

}

.card-contnet>.button .arrow-logo path {
    transition: all 0.3s ease-in-out;
}

.card-contnet>.button:hover .arrow-logo path {
    fill: #fff;
}



.community {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    padding: 0px 20px;
    margin: 50px 1px;
}

.community-logo {
    width: 120px;
    height: auto;
    margin: 10px;
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



/* responsive designs */
@media (max-width: 700px) {
    .card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    position: relative;
    height: 300px;
    background-image: url("../../images/participate-image.png");
    border-radius: 50px;
    background-size: cover;
}
.overlay{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 50px;
    background-color: #FF005C;
    opacity: 0.4;
}
.card-contnet>p {
    margin-bottom: 5px;
    margin-top: -80px;
    word-spacing: 12px;
    font-size: 18px;
    font-weight: normal;
    text-transform: uppercase;
    display: flex;
}

.card-contnet>h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    word-spacing: 10px;
}
.card-contnet>.button {
    background-color: #ffffff;
    padding: 1px 15px;
    border-radius: 0;
    border-top-right-radius: 20px;
    color: #000;
    font-size: 19px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: all 0.3s ease-in-out;
}
.community {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    padding: 0px 0px;
    margin: 30px 1px;
}

.community-logo {
    width: 100px;
    height: auto;
    margin: 0px;
}
}

</style>