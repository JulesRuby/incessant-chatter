<template>
    <div class="container">
        <h3>Please verify your e-mail.</h3>
        <p>
            A verification email will have been sent to the e-mail used to
            register your account.
        </p>
        <base-button @click="resendVerification"
            >Re-send Verification</base-button
        >
    </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';

import getUser from '@/composables/getUser.js';

export default {
    name: 'EmailValidate',
    setup() {
        const router = useRouter();
        const { user, resendVerification } = getUser();

        watch(user, () => {
            if (user.emailVerified) {
                router.push({ name: 'ChatRoom' });
            }
        });

        return { user, resendVerification };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    /* padding: 20px; */
    padding: var(--space);

    height: 40vh;
    width: 60vh;

    text-align: center;
}

.container > * + * {
    margin-top: 10px;
}
</style>