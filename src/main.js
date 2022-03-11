import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './router/router';
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {

            originalRequest._retry = true;
            store.dispatch('LogOut')
            return router.push('/login')
        }
    }
})

// axios.defaults.baseURL = 'https://www.g1bae.com';

const app = createApp(App).mount('#app');
app.use(VueRouter)
