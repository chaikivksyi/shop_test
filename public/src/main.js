import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import router from './router'
import store from "./store/index";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
