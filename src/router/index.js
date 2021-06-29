// VUE IMPORT
import { createRouter, createWebHistory } from 'vue-router';

// FIRBASE IMPORTS
import { chatAuth } from '@/firebase/config';

// VIEWS
import Welcome from '../views/Welcome.vue';
import ChatRoom from '../views/ChatRoom.vue';
import EmailVerify from '../views/EmailVerify.vue';

// Redirect unauthenticated users to Welcome
const checkAuth = (to, from, next) => {
    let user = chatAuth.currentUser; // this is more efficient than using the composable, since we are only conerned with the current user
    if (!user) {
        next({ name: 'Welcome' });
    } else if (user && !user.emailVerified) {
        next({ name: 'EmailVerify' });
    } else {
        next();
    }
};

// redirect logged in users to the ChatRoom
const requireNoAuth = (to, from, next) => {
    let user = chatAuth.currentUser;
    // console.log(chatAuth.currentUser);
    if (user && user.emailVerified) {
        next({ name: 'ChatRoom' });
    } else if (user && !user.emailedVerified) {
        next({ name: 'EmailVerify' }); // logged in but not verified
    } else {
        next(); // else enter destination
    }
};

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
        beforeEnter: requireNoAuth,
    },
    {
        path: '/chatroom',
        name: 'ChatRoom',
        component: ChatRoom,
        beforeEnter: checkAuth,
    },
    {
        path: '/emailverify',
        name: 'EmailVerify',
        component: EmailVerify,
        // beforeEnter: requireNoAuth,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
