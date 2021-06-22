import { createApp } from 'vue';
import App from './App.vue';
import ErrorOutput from './components/ErrorOutput.vue';
import router from './router';

// Global Stylesheet
import '@/assets/main.css';

const app = createApp(App);

app.use(router);

app.component('ErrorOutput', ErrorOutput);

app.mount('#app');

// createApp(App).use(router).mount('#app')
