<template>
    <router-view v-slot="{ Component }">
        <ez-transition name="route" mode="out-in">
            <component :is="Component" />
        </ez-transition>
    </router-view>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

[v-cloak] {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: var(--c2-a6);
}

[v-cloak]::before {
    position: absolute;
    content: '';

    width: 4rem;
    height: 4rem;

    top: 50%;
    left: 50%;

    background: -o-linear-gradient(
        315deg,
        var(--c1) 0%,
        var(--c4) 33%,
        var(--c1) 66%,
        var(--c4)
    );

    background: linear-gradient(
        135deg,
        var(--c1) 0%,
        var(--c4) 33%,
        var(--c1) 66%,
        var(--c4)
    );
    background-size: 300% 300%;

    border-radius: 50%;

    -webkit-animation: rotate-gradient 5s linear infinite;

    animation: rotate-gradient 100ms linear infinite;
}

#app {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@media screen and (max-width: 48rem) {
    #app {
        /* overflow: hidden; */
        padding: var(--space);
        height: 100vh;
        max-height: 100vh;
    }
}

@-webkit-keyframes rotate-gradient {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}

@keyframes rotate-gradient {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>
