<template>
    <form @submit.prevent="handleSubmit">
        <FormControl
            type="text"
            label="Display Name"
            field="displayName"
            required
            v-model="displayName"
        />
        <FormControl
            type="email"
            label="Email"
            field="email"
            required
            v-model="email"
        />
        <FormControl
            type="password"
            label="Password"
            field="password"
            required
            v-model="password"
        />
        <FormControl
            type="password"
            label="Confirm Password"
            field="passwordConfirm"
            :style="passwordsMatch ? '' : 'background-color: pink'"
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
    name: 'SignupForm',
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