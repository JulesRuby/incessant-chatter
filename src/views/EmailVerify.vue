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
        <base-button @click="checkVerification">Check Verification</base-button>
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
        const { user, sendVerification, reloadUser } = getUser();

        const checkVerification = () => {
            reloadUser();
            if (user.value.emailVerified) {
                router.push({ name: 'ChatRoom' });
            }
        };

        const resendVerification = () => {
            console.log('Bunga');
            reloadUser();
            if (!user.value.emailVerified) {
                sendVerification();
            } else {
                router.push({ name: 'ChatRoom' });
            }
        };

        return {
            user,
            sendVerification,
            resendVerification,
            reloadUser,
            checkVerification,
        };
    },
};
</script>

<style scoped>
/* .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: var(--space);

    height: 40vh;
    width: 60vh;

    text-align: center;
}

.container > * + * {
    margin-top: 10px;
} */

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    padding: var(--space);

    height: 40vh;
    width: 60vh;

    text-align: center;
}

.container > * + * {
    margin-top: 10px;
}
</style>