import { ref } from 'vue';
import { chatFirestore } from '@/firebase/config.js';

const useCollection = collection => {
    // create error inside function, because this may be used for several different collections
    const error = ref(null);

    // pass in ChatForm entry, as doc parameter
    const addDocument = async doc => {
        error.value = null; //reset error

        try {
            await chatFirestore.collection(collection).add(doc);
        } catch (err) {
            error.value = 'Could not send message';
        }
    };

    return { addDocument, error };
};

export default useCollection;
