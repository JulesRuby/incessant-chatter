<template>
    <div class="container">
        <NavBar />
        <ChatDisplay />
        <ChatForm />
    </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';

import getUser from '@/composables/getUser.js';

import NavBar from '@/components/NavBar.vue';
import ChatForm from '@/components/ChatForm.vue';
import ChatDisplay from '@/components/ChatDisplay.vue';

export default {
    name: 'ChatRoom',
    components: {
        NavBar,
        ChatDisplay,
        ChatForm,
    },
    setup() {
        const router = useRouter();
        const { user } = getUser();

        // Watch changes to user
        watch(user, () => {
            // If user becomes null, redirect to login
            if (!user.value) {
                router.push({ name: 'Welcome' });
            }
        });

        return { user };
    },
};
</script>

<style scoped>
/* .container {
    display: flex;
    flex-direction: column;

    background-color: unset;
    height: 35rem;
    max-height: 95vh;
}

@media screen and (max-width: 48rem) {
    .container {
        height: 100%;
        width: 100%;
        max-width: unset;
        max-height: 100%;
    }
} */

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    background-color: unset;
    height: 35rem;
    max-height: 95vh;
}

@media screen and (max-width: 48rem) {
    .container {
        height: 100%;
        width: 100%;
        max-width: unset;
        max-height: 100%;
    }
}
</style>