<template>
    <div class="chat-display">
        <ErrorOutput v-if="error" :error="error" />
        <div v-if="documents" class="messages">
            <div v-for="doc in documents" :key="doc.id" class="single-message">
                <span class="timestamp">{{ doc.timestamp.toDate() }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection.js';

export default {
    name: 'ChatDisplay',
    setup() {
        const { documents, error } = getCollection('messages');

        return { documents, error };
    },
};
</script>

<style scoped>
.chat-display {
    padding: 30px 20px;
    /* background: #fafafa; */
    background: var(--vesper);
}
.single-message {
    margin: 18px 0;
}
.timestamp {
    display: block;
    margin-bottom: 4px;

    color: #999;
    color: var(--exhilarate);
    font-size: 12px;
}
.name {
    margin-right: 6px;

    color: var(--aether);
    font-weight: bold;
}
.messages {
    overflow: auto;
    max-height: 400px;
}
</style>