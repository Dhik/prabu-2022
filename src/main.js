import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
import { BPagination } from 'bootstrap-vue'
Vue.component('b-pagination', BPagination)

createApp(App).use(router).mount("#app");
