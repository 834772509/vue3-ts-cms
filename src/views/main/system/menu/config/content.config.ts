export const contentTableConfig = {
  title: "菜单列表",
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "200" },
    { prop: "type", label: "级别", minWidth: "60" },
    { prop: "url", label: "菜单链接", minWidth: "120" },
    { prop: "icon", label: "菜单图标", minWidth: "100" },
    { prop: "sort", label: "排序", minWidth: "100" },
    { prop: "permission", label: "权限", minWidth: "150" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "220",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "220",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "160", slotName: "action" }
  ],
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  }
};
