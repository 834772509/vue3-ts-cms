import { createPinia } from "pinia";
import useLoginStore from "./login";

const pinia = createPinia();
export default pinia;

export function setupStores() {
  const loginStore = useLoginStore();
  loginStore.loadLocalLogin();
}
