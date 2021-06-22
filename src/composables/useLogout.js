import { ref } from 'vue';
import { chatAuth } from '@/firebase/config';

// create reusable error ref
const error = ref(null);

const logout = async () => {

	error.value = null;

	try {
		await chatAuth.signOut();
	} catch (err) {
		console.log(err);
		error.value = err.message;
	  };
}

const useLogout = () => {
	return { logout, error }
}

export default useLogout