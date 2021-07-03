<template>
    <div class="container">
        <h3>Please verify your e-mail.</h3>
        <p>
            A verification email will have been sent to the e-mail used to
            register your account.
        </p>
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
        const { user } = getUser();

        watch(user, () => {
            if (user.emailVerified) {
                router.push({ name: 'ChatRoom' });
            }
        });

        return { user };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
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