import request from "../../index";

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

// 请求每个商品的个数
export function getCategoryGoodsCount() {
  return request.get({
    url: DashboardAPI.categoryGoodsCount
  });
}

// 请求每个分类商品的销量
export function getCategoryGoodsSale() {
  return request.get({
    url: DashboardAPI.categoryGoodsSale
  });
}

// 请求每个分类商品的收藏
export function getCategoryGoodsFavor() {
  return request.get({
    url: DashboardAPI.categoryGoodsFavor
  });
}

// 请求不同城市的销量数据
export function getAddressGoodsSale() {
  return request.get({
    url: DashboardAPI.addressGoodsSale
  });
}
