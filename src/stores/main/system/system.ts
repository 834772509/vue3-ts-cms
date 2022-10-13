import { defineStore } from "pinia";
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/main/system/system";

const useSystemStore = defineStore("systemStore", {
  state: () => ({
    // 用户管理数据
    usersList: [],
    usersCount: 0,

    // 角色管理数据
    roleList: [],
    roleCount: 0,

    // 商品信息数据
    goodsList: [],
    goodsCount: 0,

    // 菜单管理数据
    menuList: [],
    menuCount: 0,

    // 部门管理数据
    departmentList: [],
    departmentCount: 0,

    // 商品类别数据
    categoryList: [],
    categoryCount: 0
  }),
  actions: {
    // 获取数据的请求
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
    },
    // 删除数据的请求
    async deletePageData(payload: any) {
      // 1.获取pageName和id
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      // 2.调用删除网络请求
      await deletePageData(pageUrl);

      // 3.重新请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    // 创建数据的请求
    async createPageDataAction(pageName: string, newData: any) {
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);

      // 请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    // 编辑数据的请求
    async editPageDataAction(pageName: string, id: any, editData: any) {
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);

      // 请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
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
