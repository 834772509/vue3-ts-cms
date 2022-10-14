export const contentTableConfig = {
  title: "商品列表",
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: "name", label: "商品名称", minWidth: "200" },
    { prop: "oldPrice", label: "原价格", minWidth: "80", slotName: "price" },
    { prop: "newPrice", label: "现价格", minWidth: "80", slotName: "price" },
    { prop: "status", label: "状态", minWidth: "100", slotName: "status" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "imgage" },
    { prop: "inventoryCount", label: "库存", minWidth: "100" },
    { prop: "saleCount", label: "销量", minWidth: "100" },
    { prop: "favorCount", label: "收藏", minWidth: "100" },
    { prop: "address", label: "地区", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "180",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "180",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "160", slotName: "action" }
  ]
};
