<template>
    <div class="chat-display">
        <div v-if="documents" class="messages" ref="chatDisplay">
            <ez-transition v-if="documents" name="opacity" group>
                <div
                    v-for="doc in dateFormattedDocs"
                    :key="doc.id"
                    class="single-message"
                >
                    <span class="timestamp">{{ doc.timestamp }}</span>
                    <span class="name">{{ doc.name }}</span>
                    <span class="message">{{ doc.message }}</span>
                </div>
            </ez-transition>
        </div>
        <ErrorOutput v-if="error" :error="error" />
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

<style>
/* .chat-display {
    overflow: hidden;
    flex-grow: 1;
    padding: var(--space-xl) var(--space);

    background-color: var(--c3-a8);
}

.messages {
    overflow: auto;
    overflow-x: hidden;
    max-height: 100%;
}

.single-message {
    display: block;

    margin: var(--space) 0;
    padding: 0px var(--space-xs);

    color: var(--c2);

    border-left: 2px solid var(--c1);
}

.timestamp {
    display: block;
    margin-bottom: var(--space-xxs);

    color: var(--c5);
    font-size: var(--scale-down-3);
}

.name {
    margin-right: var(--space-xxs);

    color: var(--c1);
    font-weight: bold;
} */

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.chat-display {
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
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
    font-size: var(--scale-down-3);
}

.name {
    margin-right: var(--space-xxs);

    color: var(--c1);
    font-weight: bold;
}

/* .message-list-enter-to {
    -webkit-transform: translate(0%, 0%);
    -ms-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
}

.message-list-enter-active {
    -webkit-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
}

.message-list-enter-from {
    -webkit-transform: translate(0%, 1rem);
    -ms-transform: translate(0%, 1rem);
    transform: translate(0%, 1rem);
}

.message-list-move {
    -webkit-transition: -webkit-transform 200ms linear;
    transition: -webkit-transform 200ms linear;
    -o-transition: transform 200ms linear;
    transition: transform 200ms linear;
    transition: transform 200ms linear, -webkit-transform 200ms linear;
} */
</style>