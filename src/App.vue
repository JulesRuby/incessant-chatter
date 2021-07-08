<template>
    <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
#app {
    flex-grow: 1;
    display: flex;
    justify-content: center;

    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.route-enter-active {
    transition: all 150ms ease-out;
}
.route-leave-active {
    transition: all 150ms ease-in;
}

.route-enter-to,
.router-leave-from {
    opacity: 1;
    transform: scale(1);
}

.route-enter-from {
    opacity: 0;
    transform: scale(0.2);
}

.route-leave-to {
    opacity: 0;
    transform: scale(0.2);
}

@media screen and (max-width: 48rem) {
    #app {
        /* overflow: hidden; */
        padding: var(--space);
        height: 100vh;
        max-height: 100vh;
    }
}
</style>
