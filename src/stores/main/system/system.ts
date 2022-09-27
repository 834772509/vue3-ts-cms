import { defineStore } from "pinia";
import { getPageListData } from "@/service/main/system/system";

const useSystemStore = defineStore("systemStore", {
  state: () => ({
    userList: [],
    userCount: 0
  }),
  actions: {
    async getPageListAction(payload: any) {
      // 1.对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      );

      const { list, totalCount } = pageResult.data;
      this.userList = list;
      this.userCount = totalCount;
    }
  }
});

export default useSystemStore;
