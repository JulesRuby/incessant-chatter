<template>
    <form action="#">
        <textarea
            placeholder="Enter message..."
            v-model="message"
            @keypress.enter.prevent="handleEnter"
        ></textarea>
        <ErrorOutput v-if="error" :error="error" />
    </form>
</template>

<script>
import { ref } from 'vue';

import { timestamp } from '@/firebase/config.js';

import getUser from '@/composables/getUser.js';
import useCollection from '@/composables/useCollection.js';

export default {
    name: 'ChatForm',
    setup() {
        const { user } = getUser();
        const { addDocument, error } = useCollection('messages'); // specifiy messages collection

        const message = ref('');

        const handleEnter = async () => {
            const entry = {
                name: user.value.displayName,
                timestamp: timestamp(),
                message: message.value,
            };

            await addDocument(entry);

            if (!error.value) {
                message.value = ''; // clear chatbar
            }
        };

        return { handleEnter, message, error };
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
    color: var(--vesper);
    font-family: inherit;

    background-color: var(--vesper);
    background-color: var(--lumo);

    border: 0;
    border-radius: 20px;
    outline: none;

    box-sizing: border-box;
}

textarea::placeholder {
    color: var(--lumo);
    color: var(--vesper);
}
</style>