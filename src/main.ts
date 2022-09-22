import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import request from "./service/";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");

console.log(import.meta.env.VITE_BASE_URL);

request
  .get({
    url: "/get",
    showLoading: true
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
