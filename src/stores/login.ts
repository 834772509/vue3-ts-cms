import { defineStore } from "pinia";

const useLoginStore = defineStore("loginStore", {
  state: () => ({
    token: "",
    userInfo: {}
  }),
  actions: {
    accountLoginAction(payload: any) {
      console.log("执行accountLoginAction", payload);
    },
    phoneLoginAction(payload: any) {
      console.log("执行phoneLoginAction", payload);
    }
  }
});

export default useLoginStore;
