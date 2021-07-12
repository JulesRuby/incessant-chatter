<template>
    <div class="welcome container">
        <p>Welcome</p>

        <ez-transition name="opacity" mode="out-in">
            <h2 v-if="showLogin">Login</h2>
            <h2 v-else>Sign Up</h2>
        </ez-transition>

        <ez-transition name="opacity" mode="out-in">
            <component
                @login="enterChat"
                @signup="enterEmailVerification"
                :is="formComponent"
            />
        </ez-transition>

        <ez-transition name="opacity" mode="out-in">
            <p v-if="showLogin" class="strip">
                No account yet?
                <span @click="showLogin = false">Signup</span> instead!
            </p>
            <p v-else class="strip">
                Already have an account?
                <span @click="showLogin = true">Login</span> here!
            </p>
        </ez-transition>
    </div>
</template>

<script>
// vue imports
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// component imports
import SignupForm from '@/components/SignupForm';
import LoginForm from '@/components/LoginForm';

export default {
    name: 'Welcome',
    components: {
        SignupForm,
        LoginForm,
    },
    setup() {
        // refs
        const router = useRouter();
        const showLogin = ref(true);

        //computed
        const formComponent = computed(() =>
            showLogin.value ? 'LoginForm' : 'SignupForm',
        );

        // functions
        const enterChat = () => {
            router.push({ name: 'ChatRoom' });
        };

        const enterEmailVerification = () => {
            router.push({ name: 'EmailVerify' });
        };

        const logPoint = (str) => console.log(str);

        const onBeforeLeave = () => logPoint('Butts');

        return {
            showLogin,
            enterChat,
            enterEmailVerification,
            formComponent,
            logPoint,
            onBeforeLeave,
        };
    },
};
</script>

<style>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.welcome {
    text-align: center;
    padding: var(--space);
}

/* form styles */
.welcome form {
    max-width: 20rem;
    margin: var(--space) auto;
}
.welcome label {
    display: block;
    margin: var(--space) 0 var(--space-xs);
}
.welcome input {
    margin: var(--space-xs) auto;
    padding: var(--space-xs);

    width: 100%;

    color: var(--c3);

    background-color: var(--lumo);

    border: 0;
    border-radius: var(--radius);
    outline: none;
}

.welcome span {
    color: var(--c4);
    font-weight: bold;
    text-decoration: underline;

    cursor: pointer;
}
.welcome button {
    margin: var(--space) auto;
}

.strip {
    margin: 0 calc(var(--space) * -1);
    background-color: var(--c2-a6);
}

@media screen and (max-width: 48rem) {
    .welcome {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: auto;
        max-height: 100vh;
    }
}
</style>