import { createPinia } from "pinia";
import useLoginStore from "./login";
import useGlobalStore from "./global";

const pinia = createPinia();
export default pinia;

export function setupStores() {
  const loginStore = useLoginStore();
  const globalStore = useGlobalStore();

  loginStore.loadLocalLogin();
  globalStore.getInitialDataAction();
}
