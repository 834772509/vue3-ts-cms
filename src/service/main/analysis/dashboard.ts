import request from "../../index";

enum DashboardAPI {
  amountList = "/goods/amount/list",
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

// 请求商品数据统计的数量
export function getAmountList() {
  return request.get({
    url: DashboardAPI.amountList
  });
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
