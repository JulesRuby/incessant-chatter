<template>
    <form @submit.prevent="handleSubmit">
        <!-- <input type="email" placeholder="Email..." required v-model="email" />
        <input
            type="password"
            placeholder="Password..."
            required
            v-model="password"
        /> -->
        <FormControl
            type="email"
            label="Email"
            field="email"
            placeholder="Email..."
            required
            v-model="email"
        />
        <FormControl
            type="password"
            label="Password"
            field="password"
            placeholder="Password..."
            required
            v-model="password"
        />
        <ErrorOutput v-if="error" :error="error" />
        <base-button>Log In</base-button>
    </form>
</template>

<script>
import { ref } from 'vue';

import useLogin from '@/composables/useLogin.js';

export default {
    name: 'LoginForm',
    emits: ['login'],
    // context object is required to emit, when using setup
    setup(_, context) {
        const { login, error } = useLogin();

        // Create refs!
        const email = ref('');
        const password = ref('');

        // functions
        const handleSubmit = async () => {
            await login(email.value, password.value);

            if (!error.value) {
                context.emit('login');
            }
        };

        return { email, password, handleSubmit, error };
    },
};
</script>

<style scoped>
</style>