<template>
    <div class="body">

        <div class="whitespace">
        </div>
        <footer>
<div>
<img src="" alt=""/>
</div>
<div>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
<img src="" alt=""/>
</div>
<div>
<img src="" alt=""/>
</div>
        </footer>

        <div class="whitespace">
        </div>
    </div>
</template>
<script></script>

<style scoped>
.body {
    background-color: #111010;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
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
</style>