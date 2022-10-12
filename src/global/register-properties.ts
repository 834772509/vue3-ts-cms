import { formatUtcString } from "@/utils/date-format";
import type { App } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $filters: typeof filters;
  }
}

const filters = {
  formatTime(value: string) {
    return formatUtcString(value);
  }
};

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = filters;
}
