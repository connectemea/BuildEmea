<template>
    <div class="body">
        <div class="whitespace">
        </div>
        <div class="section">

            <header class="header">
                <div class="header-left">
                    <router-link to="#">
                        <img class="header-left-logo" src="../../images/header-logo-new.png" alt="" />
                    </router-link>

                </div>
                <div class="header-right">

                    <router-link to="#explore" @click="scrollToSection('#explore')"
                        class="router-link">Explore</router-link>
                    <router-link to="schedule" class="router-link">Schedule</router-link>
                    <router-link to="#participate" @click="scrollToSection('#participate')"
                        class="router-link">Participate</router-link>
                </div>
                <div class="header-right--responsive">
                    <div class="nav-button" @click="toggleNav" :class="{ active: isNavActive }" ref="navButton">
                        <div class="nav-icon"></div>
                        <div class="nav-icon"></div>
                        <div class="nav-icon"></div>
                    </div>

                    <div class="nav-links" :class="{ active: isNavActive }" ref="navLinks">
                        <router-link to="#explore" @click="scrollToSection('#explore')" class="responsive-nav-li">Explore</router-link>
                        <router-link to="schedule" class="responsive-nav-li">Schedule</router-link>
                        <router-link to="#participate" @click="scrollToSection('#participate')" class="responsive-nav-li">Participate</router-link>
                    </div>
                </div>
            </header>
            <div class="center-section">
                <img class="head-logo" src="../../images/buildEMEA-1.png" />
                <div class="location">
                    <img src="../../images/Vectorlocation.svg" alt="" class="location-logo" />
                    <p>EMEA College of Arts and Science</p>
                </div>
                <div class="date">
                    <img src="../../images/Vectordate.svg" alt="" class="date-logo" />
                    <p>07 DEC-01 JAN 2024</p>
                </div>
            </div>
            <div>
                <img src="../../images/image-game.png" alt="" class="game-image" />

            </div>
        </div>

        <div class="whitespace">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isNavActive: false,
        };
    },
    methods: {
        toggleNav() {
            this.isNavActive = !this.isNavActive;
        },
        closeNav() {
            this.isNavActive = false;
        },
        handleWindowClick(event) {
            // Check if the click is outside the navigation links, the nav-button, and the nav-card
            const isNavButton = this.$refs.navButton.contains(event.target);
            const isNavLinks = this.$refs.navLinks.contains(event.target);
            const isNavCard = this.$refs.navCard.contains(event.target);

            if (!isNavButton && !isNavLinks && !isNavCard) {
                this.isNavActive = false;
            }

            if (window.getComputedStyle(navCard).display === 'none') {
                navCard.style.display = 'flex';
            } else {
                navCard.style.display = 'none';
            }
        },
        // Function to smoothly scroll to a target section
        scrollToSection(target) {
            const element = document.querySelector(target);
            if (element) {
                this.scrollTo(element.offsetTop, 1000); // Adjust the duration (in milliseconds) as needed
            }
            this.isNavActive = false;

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
        },
    },
    mounted() {
        // Add a click event listener to the window
        window.addEventListener('click', this.handleWindowClick);
    },
    beforeUnmount() {
        // Remove the click event listener when the component is unmounted
        window.removeEventListener('click', this.handleWindowClick);
    },
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

.header-left {
    flex: 1;
}

.header-left-logo {
    width: 120px;
    height: auto;
    padding: 10px;
}

.header-right {
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
.center-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.head-logo {
    width: 500px;
}

.location {
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

.location-logo {
    width: 20px;
    height: auto;
    margin-right: 12px;
}

.date {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    margin: 10px;
    margin-top: 1px;
}

.date-logo {
    width: 20px;
    height: auto;
    margin-right: 12px;
    margin-top: -5px;
}

.game-image {
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 0px 25px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
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
.header-right--responsive {
    display: none;
    align-items: center;
    font-weight: 600;
}

.nav-links {
    display: none;
    flex-direction: column;
    font-weight: 600;
    position: absolute;
    top: 70px;
    border-radius: 10px;
    right: 0;
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.nav-links.active {
    opacity: 1;
    transform: translateY(0);
}


.nav-icon {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
}
.responsive-nav-li{
    color: #ddd;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    margin: 10px;
    margin-top: 1px;
    border-radius: 10px;
}
.responsive-nav-li:hover{
    background-color: #B90848;
    cursor: pointer;
}

/* responsive designs */
@media (max-width: 750px) {
    .nav-button {
        display: block;
    }

    .header-right--responsive {
        display: flex;
        flex-direction: column;
        z-index: 1;
    }

    .nav-links {
        position: absolute;
        padding: 20px;
        background-color: #b35c7c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        z-index: 1;
        right: 30px;
        top: 70px;
    }

    .nav-links:hover {
        background-color: #B90848;
        cursor: pointer;
    }

    .nav-button.active .nav-icon:nth-child(1) {
        transform: rotate(-45deg) translate(-6px, 8px);
    }

    .nav-button.active .nav-icon:nth-child(2) {
        opacity: 0;
    }

    .nav-button.active .nav-icon:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .head-logo {
        width: 300px;
    }



    /* desktop screen off */
    .header-right {
        display: none;
    }

    .header-left-logo {
        height: auto;
        margin: 5px;
        padding: 0;
    }

.header-left-logo {
    width: 105px;
    height: auto;
    padding: 10px;
}
}

@media (max-width: 450px) {
    .head-logo {
        width: 250px;
    }

    .header-left-logo {
    width: 90px;
    height: auto;
    padding: 10px;
}
    .location {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        margin: 10px;
        margin-top: 1px;
        padding: 5px 18px;
    }

    .location-logo {
        width: 16px;
    }

    .date {
        font-size: 16px;
        margin: 10px;
        margin-top: 1px;
    }

    .date-logo {
        width: 17px;
        height: auto;
        margin-right: 12px;
    }
}</style>