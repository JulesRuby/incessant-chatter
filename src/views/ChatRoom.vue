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
</style>