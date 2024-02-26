<template>
    <div class="body">

        <div class="parent">
            <router-link to="/projects">
                <section class="projects" >
                <h1 >Projects</h1>
            </section>
            </router-link>
            <router-link to="/winners">
                <section class="winners" >
                    <h1>Winners</h1>
                </section>
            </router-link>
        </div>

    </div>
</template>
<script setup>
</script>
<style scoped>
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.projects {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 360px;
    min-height: 100px;
    border: 1px solid #B90848;
    border-top-left-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
}

.projects:hover,
.winners:hover {
    background-color: #B90848;
    color: white;
    border: 1px solid #fff;
}

.projects:hover h1,
.winners:hover h1 {
    color: white;
}

.winners {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 360px;
    min-height: 100px;
    border: 1px solid #B90848;
    border-top-right-radius: 50px;
    transition: 0.5s;
    cursor: pointer;
}

h1 {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 600;
    color: #B90848;
    transition: 0.5s;
}

@media (max-width: 750px) {
    .parent{
        flex-direction: column;
    }
    .winners {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 50px;
        min-width: 320px;

    }
    .projects{
        min-width: 320px;
    }
}
</style>