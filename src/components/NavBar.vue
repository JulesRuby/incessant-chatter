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
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    /* background-color: var(--c3-a8); */

    border-bottom: 1px solid #eee;
    border-bottom: 1px solid var(--aether);
}
nav p {
    margin: 2px auto;
    font-family: 'Libre Barcode 128 Text', cursive;
    font-size: 32px;
    color: var(--aether);
    /* color: var(--c3); */
}
nav p.email {
    font-size: 14px;
    font-size: 32px;
    color: #999;
    color: var(--exhilarate);
}
</style>