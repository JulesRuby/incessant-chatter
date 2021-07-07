import { ref } from 'vue';
import { chatAuth } from '@/firebase/config';

const user = ref(chatAuth.currentUser); // use FB to get current user as initial ref state, to compare for changes

// fire callback function every time the user's login status is changed
chatAuth.onAuthStateChanged(_user => {
    user.value = _user; // set ref to user returned from cb
});

const reloadUser = () => user.value.reload();

const sendVerification = () => {
    if (!user.value.emailVerified) {
        user.value.sendEmailVerification();
    } else {
        console.log('Already verified.');
    }
};


const getUser = () => {
    return { user, sendVerification, reloadUser };
};

export default getUser;
