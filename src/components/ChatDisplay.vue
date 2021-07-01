<template>
    <div class="chat-display">
        <ErrorOutput v-if="error" :error="error" />
        <!-- Ref chatDisplay for height / scroll -->
        <div v-if="documents" class="messages" ref="chatDisplay">
            <div
                v-for="doc in dateFormattedDocs"
                :key="doc.id"
                class="single-message"
            >
                <span class="timestamp">{{ doc.timestamp }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onUpdated } from 'vue';
import { formatDistanceToNow } from 'date-fns';

import getCollection from '@/composables/getCollection.js';

export default {
    name: 'ChatDisplay',
    setup() {
        const { documents, error } = getCollection('messages');

        // compute date format
        const dateFormattedDocs = computed(() => {
            // avoid computing if no docs
            if (documents.value) {
                return documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.timestamp.toDate()); // convert timestamp FromNow ('x minutes ago' )
                    return { ...doc, timestamp: time }; // spread doc to object, reassign timestamp with formatted
                });
            }
        });

        // create chatDisplay ref to scroll user to bottom of messages
        const chatDisplay = ref(null);

        // on update, set scrollTop to the scrollable element height
        onUpdated(() => {
            chatDisplay.value.scrollTop = chatDisplay.value.scrollHeight;
        });

        return { documents, error, dateFormattedDocs, chatDisplay };
    },
};
</script>

<style scoped>
.chat-display {
    padding: 30px 20px;
    /* background: #fafafa; */
    /* background: var(--vesper); */
    /* background: var(--c2-a8); */
}
.single-message {
    margin: 18px 0;
    color: var(--c2);
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