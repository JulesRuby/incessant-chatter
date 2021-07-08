<template>
    <div class="welcome container">
        <p>Welcome</p>
        <h2 v-if="showLogin">Login</h2>
        <h2 v-else>Sign Up</h2>
        <transition>
            <component
                @login="enterChat"
                @signup="enterChat"
                :is="showLogin ? 'LoginForm' : 'SignupForm'"
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
import { ref } from 'vue';
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

        // functions
        const enterChat = () => {
            router.push({ name: 'ChatRoom' });
        };

        return { showLogin, enterChat };
    },
};
</script>

<style>
.welcome {
    text-align: center;
    /* padding: 20px 0; */
    padding: var(--space) 0;
    /* transition: all 200ms ease; */
}
/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
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
    /* margin: 20px auto; */
    margin: var(--space) auto;
}

.strip {
    background-color: var(--c2-a6);
}
</style>