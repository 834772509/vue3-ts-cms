import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import "normalize.css";
import "./assets/css/index.less";
import { setupStores } from "./stores";
import { globalProperties } from "./global";

const app = createApp(App);

app.use(globalProperties);
app.use(pinia);
setupStores();
app.use(router);

app.mount("#app");
