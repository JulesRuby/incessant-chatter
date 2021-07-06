import { ref } from 'vue';
import { chatAuth } from '@/firebase/config';

// create reusable error ref
const error = ref(null);

const signup = async (displayName, email, password) => {
    error.value = null; // reset error to null

    try {
        // access firebase auth method for email/pass signup
        const res = await chatAuth.createUserWithEmailAndPassword(
            email,
            password,
        );

        // If res is error or null
        if (!res) {
            throw new Error('Could not complete user signup.');
        }

        // when successful, update user displayName (( NOTE: displayName is a specific Firebase attribute ))
        await res.user.updateProfile({ displayName });
        await res.user.sendEmailVerification();
        error.value = null; // not completely sure this is necessary, but just in case

        return res;
    } catch (err) {
        error.value = err.message; // set error ref to the returned error
    }
};

const useSignup = () => {
    return { signup, error };
};

export default useSignup;
