<template>
    <div class="container">
        <NavBar />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'ChatRoom',
    components: {
        NavBar,
    },
    setup() {
        return {};
    },
};
</script>

<style scoped>
</style>