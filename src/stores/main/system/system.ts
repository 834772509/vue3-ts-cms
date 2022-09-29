import { defineStore } from "pinia";
import { getPageListData } from "@/service/main/system/system";

const useSystemStore = defineStore("systemStore", {
  state: () => ({
    // 用户管理数据
    usersList: [],
    usersCount: 0,

    // 角色管理数据
    roleList: [],
    roleCount: 0
  }),
  actions: {
    async getPageListAction(payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;

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
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount: (state) => {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  }
});

export default useSystemStore;
