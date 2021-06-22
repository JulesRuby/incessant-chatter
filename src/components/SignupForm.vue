<template>
    <!-- <h2>Signup</h2> -->
    <form @submit.prevent="handleSubmit">
        <input
            type="text"
            placeholder="Display name..."
            required
            v-model="displayName"
        />
        <input type="email" placeholder="Email..." required v-model="email" />
        <input
            type="password"
            placeholder="Password..."
            required
            v-model="password"
        />
        <ErrorOutput v-if="error" :error="error" />
        <button>Sign Up</button>
    </form>
</template>

<script>
// vue imports
import { ref } from 'vue';
// composables
import useSignup from '@/composables/useSignup';

export default {
    name: 'Signup',
    emits: ['signup'],
    setup(_, context) {
        // assign returned values from useSignup
        const { signup, error } = useSignup();

        // Create refs!
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        // functions
        const handleSubmit = async () => {
            await signup(displayName.value, email.value, password.value);
            if (!error.value) {
                context.emit('signup');
            }
        };

        return { displayName, email, password, handleSubmit, error };
    },
};
</script>

<style scoped>
</style>