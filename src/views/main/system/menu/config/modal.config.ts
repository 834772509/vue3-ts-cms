import type { IForm } from "@/base-ui/form";

export const modalConfig: IForm = {
  itemStyle: {},
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "菜单名称",
      placeholder: "请输入菜单名称"
    },
    {
      field: "type",
      type: "input",
      label: "菜单级别",
      placeholder: "请输入菜单级别"
    },
    {
      field: "url",
      type: "input",
      label: "菜单链接",
      placeholder: "请输入菜单链接"
    },
    {
      field: "icon",
      type: "input",
      label: "菜单图标",
      placeholder: "请输入菜单图标"
    },
    {
      field: "sort",
      type: "input",
      label: "菜单排序",
      placeholder: "请输入菜单排序"
    },
    {
      field: "icon",
      type: "input",
      label: "权限",
      placeholder: "请输入权限"
    }
  ]
};
