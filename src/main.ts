import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import mountFontAwesome from '@/fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

app.use(createPinia());
app.use(router);

mountFontAwesome();
app.component('FaIcon', FontAwesomeIcon);

app.mount('#app');
