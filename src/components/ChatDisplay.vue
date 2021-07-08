<template>
    <div class="chat-display">
        <ErrorOutput v-if="error" :error="error" />
        <!-- Ref chatDisplay for height / scroll -->
        <div v-if="documents" class="messages" ref="chatDisplay">
            <transition-group
                v-if="documents"
                ref="chatDisplay"
                name="message-list"
                @click="logChatDisplay"
            >
                <div
                    v-for="doc in dateFormattedDocs"
                    :key="doc.id"
                    class="single-message"
                >
                    <span class="timestamp">{{ doc.timestamp }}</span>
                    <span class="name">{{ doc.name }}</span>
                    <span class="message">{{ doc.message }}</span>
                </div>
            </transition-group>
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

        return {
            documents,
            error,
            dateFormattedDocs,
            chatDisplay,
        };
    },
};
</script>

<style scoped>
.chat-display {
    overflow: hidden;
    flex-grow: 1; /* grow to fit free space in ChatRoom */
    padding: var(--space-xl) var(--space);

    background-color: var(--c3-a8);
}

.messages {
    overflow: auto;
    overflow-x: hidden;
    max-height: 100%; /* avoid extending beyond .chat-display height */
}

.single-message {
    margin: var(--space) 0;
    padding: 0px var(--space-xs);

    color: var(--c2);

    border-left: 2px solid var(--c1);
}

.timestamp {
    display: block;
    margin-bottom: var(--space-xxs);

    color: var(--c5);
    /* font-size: 12px; */
    font-size: var(--scale-down-3);
}

.name {
    margin-right: var(--space-xxs);

    color: var(--c1);
    font-weight: bold;
}

.message-list-enter-to {
    opacity: 1;
    transform: translate(0%, 0%);
}

.message-list-enter-active {
    transition: all 250ms linear;
}

.message-list-enter-from {
    opacity: 0;
    transform: translate(0%, 1rem);
}

.message-list-move {
    transition: transform 150ms linear;
}

/* We'll use these later if I include delete message functions. */
/* .message-list-leave-to {
}
.message-list-leave-active {
}
.message-list-leave-from {
} */
</style>