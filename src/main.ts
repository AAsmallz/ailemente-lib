import { createApp } from 'vue';
import App from './App.vue';
import ElContainer from './components/container';
import ElForm from './components/form';

const app = createApp(App);
app.use(ElContainer);
app.use(ElForm);
app.mount('#app');
