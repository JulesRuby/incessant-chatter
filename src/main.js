// VUE IMPORTS
import { createApp } from 'vue';

// APP / GLOBALS
import App from './App.vue';
import ErrorOutput from './components/UI/ErrorOutput.vue';
import BaseButton from './components/UI/BaseButton.vue';

// NICE FINGS
import router from './router';

// FIREBASE
import { chatAuth } from '@/firebase/config';

// Global Stylesheet
import '@/assets/main.css';


// Declare app
let app;

// We wait for the initial user value to be retrieved from firebase before rendering the app
// preventing route guard redirects on page refresh
// On authentication state change
chatAuth.onAuthStateChanged(() => {
	// if app has no value, then create the app
	if (!app) {
		app = createApp(App);

		app.use(router);

		app.component('ErrorOutput', ErrorOutput);
		app.component('BaseButton', BaseButton);

		app.mount('#app');
	}
});
