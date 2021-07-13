<template>
    <transition v-if="!group" :name="name" :mode="mode">
        <slot></slot>
    </transition>

    <transition-group v-else :name="name">
        <slot></slot>
    </transition-group>
</template>

<script>
export default {
    name: 'EzTransition',
    props: {
        mode: {
            type: String,
            required: false,
            default: undefined,
        },
        name: {
            type: String,
            required: false,
            default: 'opacity',
        },
        group: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    setup() {},
};
</script>

<style>
/****************************/
/* Default Opacity Transition */
/****************************/

.opacity-enter-active {
    -webkit-transition: all 150ms ease-out;
    -o-transition: all 150ms ease-out;
    transition: all 150ms ease-out;
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
}

.opacity-leave-active {
    -webkit-transition: all 150ms ease-in;
    -o-transition: all 150ms ease-in;
    transition: all 150ms ease-in;
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
}

.opacity-enter-to,
.opacity-leave-from {
    opacity: 1;
}

.opacity-enter-from {
    opacity: 0;
}

.opacity-leave-to {
    opacity: 0;
}

.opacity-move {
    -webkit-transition: -webkit-transform 150ms linear;
    transition: -webkit-transform 150ms linear;
    -o-transition: transform 150ms linear;
    transition: transform 150ms linear;
    transition: transform 150ms linear, -webkit-transform 150ms linear;
}

/****************************/
/* Messages Group Transition */
/****************************/

.message-list-enter-to {
    /* opacity: 1; */
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
    /* opacity: 0; */
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
}

/* We'll use these later if I include delete message functions. */
/* .message-list-leave-to {
}
.message-list-leave-active {
}
.message-list-leave-from {
} */

/****************************/
/* Grow Transition */
/****************************/

/* .grow-enter-active {
    -webkit-transition: all 150ms ease;
    -o-transition: all 150ms ease;
    transition: all 150ms ease;
}

.grow-enter-to {
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
}

.grow-enter-from {
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
} */

/****************************/
/* Route Transition */
/****************************/

.route-enter-active {
    -webkit-transition: all 150ms ease-out;
    -o-transition: all 150ms ease-out;
    transition: all 150ms ease-out;
}

.route-leave-active {
    -webkit-transition: all 150ms ease-in;
    -o-transition: all 150ms ease-in;
    transition: all 150ms ease-in;
}

.route-enter-to,
.router-leave-from {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.route-enter-from {
    opacity: 0;
    -webkit-transform: scale(0.2);
    -ms-transform: scale(0.2);
    transform: scale(0.2);
}

.route-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.2);
    -ms-transform: scale(0.2);
    transform: scale(0.2);
}
</style>
