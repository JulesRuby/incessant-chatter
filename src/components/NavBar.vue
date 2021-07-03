<template>
    <nav v-if="user">
        <div class="user-info">
            <!-- this will throw errors if logged out, since we're trying to access properties of null -->
            <!-- So make <nav> conditional -->
            <p>{{ user.displayName }}</p>
            <p class="email">{{ user.email }}</p>
        </div>

        <!-- <button @click="handleLogout">Logout</button> -->
        <base-button @click="handleLogout">Logout</base-button>
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

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
    padding: var(--space-xs) var(--space);

    background-color: var(--c1-a8);
}

.user-info {
    padding: 10px;
    padding: var(--space-xs);
    background-color: var(--c3-a9);
    border-radius: var(--radius);
}

nav p {
    margin: 2px auto;
    font-family: 'Libre Barcode 128 Text', cursive;
    font-size: 32px;
    font-size: var(--scale-up-4);
    color: var(--c1);
    /* color: var(--c3); */
    /* background-color: var(--c3); */
}
nav p.email {
    font-size: var(--scale-up-4);
    color: var(--c4);
}
</style>