import { defineStore } from "pinia";
import { getPageListData } from "@/service/main/system/system";

const useSystemStore = defineStore("systemStore", {
  state: () => ({
    userList: [],
    userCount: 0,

    roleList: [],
    roleCount: 0
  }),
  actions: {
    async getPageListAction(payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName;
      // const pageUrl = `${pageName}/list`;
      let pageUrl = "";
      switch (pageName) {
        case "user":
          pageUrl = "/users/list";
          break;
        case "role":
          pageUrl = "/role/list";
          break;
        default:
          break;
      }

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data;
      this.$patch({
        [`${pageName.toLowerCase()}List`]: list,
        [`${pageName.toLowerCase()}Count`]: totalCount
      });
    }
  },
  getters: {
    pageListData: (state) => {
      return (pageName: string) => {
        switch (pageName) {
          case "user":
            return state.userList;
          case "role":
            return state.roleList;
          default:
            return [];
        }
      };
    }
  }
});

export default useSystemStore;
