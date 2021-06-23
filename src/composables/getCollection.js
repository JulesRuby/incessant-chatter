import { ref, watchEffect } from 'vue';
import { chatFirestore } from '@/firebase/config.js';

const getCollection = collection => {
    const error = ref(null);
    const documents = ref(null);

    // store collection reference
    let collectionRef = chatFirestore
        .collection(collection)
        .orderBy('timestamp');

    // store returned function to unsub
    const unsub = collectionRef.onSnapshot(
        snapshot => {
            console.log('Snapshot'); // gotta keep an eye on the snapshots so I don't get charged
            let results = [];
            // loop through snapshot docs and populate results
            snapshot.docs.forEach(doc => {
                // Firebase document timestamp must exist before the data is spread, or it will be a local timestamp, and erroneous
                doc.data().timestamp &&
                    results.push({ ...doc.data(), id: doc.id }); // add the firestore doc id as well
            });

            documents.value = results;
            error.value = null;
        },
        err => {
            console.log(err.message);
            documents.value = null;
            error.value = 'Error fetching data.';
        },
    );

    // pass in Vue's onInvalidate
    watchEffect(onInvalidate => {
        // Unsubscribe onSnapshot from prev collection when this watcher is stopped by component unmount
        onInvalidate(() => unsub());
    });

    return { documents, error };
};

export default getCollection;
