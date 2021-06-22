<template>
    <nav v-if="user">
        <div>
            <!-- this will throw errors if logged out, since we're trying to access properties of null -->
            <!-- So make <nav> conditional -->
            <p>{{ user.displayName }}</p>
            <p class="email">{{ user.email }}</p>
        </div>

        <button @click="handleLogout">Logout</button>
    </nav>
</template>

<script>
import useLogout from '@/composables/useLogout.js';
import getUser from '@/composables/getUser.js';

export default {
    name: 'NavBar',
    setup() {
        const { logout, error } = useLogout();
        const { user } = getUser();

        const handleLogout = async () => {
            await logout();

            if (!error.value) {
                console.log('Successfully logged out!');
            }
        };

        return { error, handleLogout, user };
    },
};
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    border-bottom: 1px solid var(--aether);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
    color: var(--aether);
}
nav p.email {
    font-size: 14px;
    color: #999;
    color: var(--exhilarate);
}
</style>