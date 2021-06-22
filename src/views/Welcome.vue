<template>
    <div class="welcome container">
        <p>Welcome</p>
        <!-- <div v-if="showLogin">
            <LoginForm />
        </div>
        <div v-else>
            <SignupForm />
        </div> -->

        <h2 v-if="showLogin">Login</h2>
        <h2 v-else>Sign Up</h2>

        <Component
            @login="enterChat"
            @signup="enterChat"
            :is="showLogin ? 'LoginForm' : 'SignupForm'"
        />
        <p v-if="showLogin">
            No account yet?
            <span @click="showLogin = false">Signup</span> instead!
        </p>
        <p v-else>
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
    padding: 20px 0;
}
/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input {
    margin: 10px auto;
    padding: 10px;

    width: 100%;

    color: #999;
    color: var(--vesper);

    background-color: var(--lumo);
    /* border: 1px solid #eee; */
    /* border: 1px solid var(--aether); */
    border: 0;
    border-radius: 20px;
    outline: none;
}

.welcome span {
    color: var(--aether);
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>