import { createApp } from 'vue'
import './assets/styles/index.css'
import {router} from "./router";
import App from "./App.vue";
import {createPinia} from "pinia";
import Vue3Toastify, {toast, type ToastContainerOptions} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(Vue3Toastify, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT
    } as ToastContainerOptions)
    .mount('#app')
