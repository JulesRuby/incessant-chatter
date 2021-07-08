<template>
    <div class="welcome container">
        <p>Welcome</p>
        <h2 v-if="showLogin">Login</h2>
        <h2 v-else>Sign Up</h2>
        <transition name="opacity" mode="out-in">
            <component
                @login="enterChat"
                @signup="enterEmailVerification"
                :is="formComponent"
            />
        </transition>
        <p v-if="showLogin" class="strip">
            No account yet?
            <span @click="showLogin = false">Signup</span> instead!
        </p>
        <p v-else class="strip">
            Already have an account?
            <span @click="showLogin = true">Login</span> here!
        </p>
        <!-- <LoginForm /> -->
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
.welcome {
    text-align: center;
    /* padding: 20px 0; */
    padding: var(--space);
    /* transition: all 200ms ease; */
}
/* form styles */
.welcome form {
    /* width: 300px; */
    max-width: 20rem;
    /* margin: 20px auto; */
    margin: var(--space) auto;
}
.welcome label {
    display: block;
    /* margin: 20px 0 10px; */
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

.opacity-enter-active {
    transition: all 150ms ease-out;
    transform-origin: left;
}
.opacity-leave-active {
    transition: all 150ms ease-in;
    transform-origin: left;
}

.opacity-enter-to,
.opacity-leave-from {
    opacity: 1;
    /* transform: scaleX(1); */
}

.opacity-enter-from {
    opacity: 0;
    /* transform: scaleX(0.2); */
}

.opacity-leave-to {
    opacity: 0;
    /* transform: scaleX(0.2); */
}

.opacity-move {
    transition: transform 150ms linear;
}
</style>