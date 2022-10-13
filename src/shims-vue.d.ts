declare const $filters: any;
declare module "@vue/runtime-core" {
  // 为 `this.$filters` 提供类型声明
  interface ComponentCustomProperties {
    $filters: any;
  }
}

export {};
