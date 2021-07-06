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
        <input
            type="password"
            :style="passwordsMatch ? '' : 'background-color: pink'"
            placeholder=" Re-type Password..."
            required
            v-model="passwordConfirm"
        />
        <ErrorOutput v-if="error" :error="error" />
        <base-button :disabled="!passwordsMatch">Sign Up</base-button>
    </form>
</template>

<script>
// vue imports
import { ref, computed } from 'vue';
// composables
import useSignup from '@/composables/useSignup';

export default {
    name: 'Signup',
    emits: ['signup'],
    setup(_, context) {
        // Assign returned values from useSignup
        const { signup, error } = useSignup();

        // Create refs!
        const displayName = ref('');
        const email = ref('');
        const password = ref('');
        const passwordConfirm = ref('');

        // Computed
        // Check if passwords match
        const passwordsMatch = computed(
            () => password.value === passwordConfirm.value,
        );

        // functions
        const handleSubmit = async () => {
            if (!passwordsMatch.value) {
                // Deny submit if passwords don't match, for good measure
                return;
            }

            await signup(displayName.value, email.value, password.value);
            if (!error.value) {
                context.emit('signup');
            }
        };

        return {
            displayName,
            email,
            password,
            passwordConfirm,
            passwordsMatch,
            handleSubmit,
            error,
        };
    },
};
</script>

<style scoped>
</style>