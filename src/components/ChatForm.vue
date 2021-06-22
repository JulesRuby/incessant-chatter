<template>
    <form action="#">
        <textarea
            placeholder="Enter message..."
            v-model="message"
            @keypress.enter.prevent="handleEnter"
        ></textarea>
    </form>
</template>

<script>
import { ref } from 'vue';

import { timestamp } from '@/firebase/config.js';

import getUser from '@/composables/getUser.js';

export default {
    name: 'ChatForm',
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

        return { handleEnter, message };
    },
};
</script>

<style scoped>
form {
    margin: 10px;
}
textarea {
    margin-bottom: 6px;
    padding: 10px;

    width: 100%;
    max-width: 100%;

    color: var(--lumo);
    font-family: inherit;

    background-color: var(--vesper);

    border: 0;
    border-radius: 20px;
    outline: none;

    box-sizing: border-box;
}

textarea::placeholder {
    color: var(--lumo);
}
</style>