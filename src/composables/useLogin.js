import { ref } from 'vue';
import { chatAuth } from '@/firebase/config';

// create reusable error ref
const error = ref(null);

const login = async (email, password) => {
	error.value = null // reset error value

	try {

		const res = await chatAuth.signInWithEmailAndPassword(email, password);

		// if (!res) {
		// 	throw new Error('Could not validate login');
		// }

		error.value = null;
		console.log(res);

		return res

	} catch (err) {
		console.log(err.value) // log actual error to us
		error.value = 'Invalid login credentials.'; // display this err msg to user
	}
}

const useLogin = () => {
	return { login, error }
}

export default useLogin