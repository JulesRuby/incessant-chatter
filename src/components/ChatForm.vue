<template>
    <form action="#">
        <textarea
            placeholder="Enter message..."
            v-model="message"
            @keypress.enter.prevent="handleEntry"
        ></textarea>
    </form>
</template>

<script>
import { ref } from 'vue';

import { timestamp } from '@/firebase/config.js';

import getUser from '@/composables/getUser.js';

export default {
    setup() {
        const { user } = getUser();

        const message = ref('');

        const handleEnter = async () => {
            // Create chat msg object
            const entry = {
                name: user.value.displayName,
                timestamp: timestamp(),
                message: message.value,
            };

            console.log(entry);

            // clear chatbar
            message.value = '';
        };

        return { handleSubmit, message };
    },
};
</script>

<style>
</style>