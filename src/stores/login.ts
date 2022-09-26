import { defineStore } from "pinia";
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login";
import type { IAccount } from "@/service/login/type";
import localCache from "@/utils/cache";
import router from "@/router";
import { mapMenusToRouters } from "@/utils/map-menus";

const useLoginStore = defineStore("loginStore", {
  state: () => ({
    token: "",
    userInfo: {} as any,
    _userMenus: [] as any[],
    get userMenus() {
      return this._userMenus;
    },
    set userMenus(value) {
      mapMenusToRouters(value).then((routes) => {
        routes.forEach((route) => {
          router.addRoute("main", route);
        });
      });
      this._userMenus = value;
    }
  }),
  actions: {
    async accountLoginAction(payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      this.token = token;
      localCache.setCache("token", token);

      // 2.请求用户信息
      const userInfoResult: any = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      this.userInfo = userInfo;
      localCache.setCache("userInfo", userInfo);

      // 3.请求用户菜单
      const userMenusResult: any = await requestUserMenusByRoleId(
        userInfo.role.id
      );
      const userMenus = userMenusResult.data;
      this.userMenus = userMenus;
      localCache.setCache("userMenus", userMenus);

      // 4. 跳转到首页
      router.push("/main");
    },
    phoneLoginAction(payload: any) {
      console.log("执行phoneLoginAction", payload);
    },
    loadLocalLogin() {
      const token = localCache.getCache("token");
      if (token) {
        this.token = token;
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        this.userInfo = userInfo;
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        this.userMenus = userMenus;
      }
    }
  }
});

export default useLoginStore;
