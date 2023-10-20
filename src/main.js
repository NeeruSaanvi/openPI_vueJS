import { createApp } from 'vue';
// import './style.css';
import App from '@/App.vue';

import router from "@/router";
import store from "@/store";
import FlashMessage from "@smartweb/vue-flash-message";

const app = createApp(App);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import our custom CSS
import "@/assets/scss/styles.scss";

// app.config.globalProperties.$guest = guest
// app.config.globalProperties.$authUser = authUser
// app.config.globalProperties.$api = api
app.config.globalProperties.$store = store;

app.use(router);
app.use(store);
app.use(FlashMessage);
app.mount("#app");