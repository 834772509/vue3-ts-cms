import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "normalize.css";
import "./assets/css/index.less";
import { setupStores } from "./stores";
import { globalProperties } from "./global";

const app = createApp(App);

app.use(globalProperties);
app.use(pinia);
setupStores();
app.use(router);
app.use(ElementPlus, {
  locale: zhCn
});

app.mount("#app");
