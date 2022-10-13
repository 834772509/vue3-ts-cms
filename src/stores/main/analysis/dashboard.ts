import { defineStore } from "pinia";
import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard";

const useDashboardStore = defineStore("dashboardStore", {
  state: () => ({
    // 数据统计信息
    topPanelDatas: [] as any[],
    // 每个商品的个数
    categoryGoodsCount: [] as any[],
    // 每个分类商品的销量
    categoryGoodsSale: [] as any[],
    // 每个分类商品的收藏
    categoryGoodsFavor: [] as any[],
    // 不同城市的销量数据
    addressGoodsSale: [] as any
  }),
  actions: {
    async getDashboardDataAction() {
      const topPanelDatasResult = await getAmountList();
      this.topPanelDatas = topPanelDatasResult.data;

      const categoryCountResult = await getCategoryGoodsCount();
      this.categoryGoodsCount = categoryCountResult.data;

      const categorySaleResult = await getCategoryGoodsSale();
      this.categoryGoodsSale = categorySaleResult.data;

      const categoryFavorResult = await getCategoryGoodsFavor();
      this.categoryGoodsFavor = categoryFavorResult.data;

      const addressGoodsResult = await getAddressGoodsSale();
      this.addressGoodsSale = addressGoodsResult.data;
    }
  }
});

export default useDashboardStore;
