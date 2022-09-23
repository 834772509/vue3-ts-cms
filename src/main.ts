import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import "normalize.css";
import "./assets/css/index.less";
import { setupStores } from "./stores";

const app = createApp(App);

app.use(router);
app.use(pinia);
setupStores();

app.mount("#app");
