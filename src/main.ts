import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import "normalize.css";
import "./assets/css/index.less";
import { setupStores } from "./stores";

const app = createApp(App);

app.use(pinia);
setupStores();
app.use(router);

app.mount("#app");
