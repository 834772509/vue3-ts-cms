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
      label: "类别名称",
      placeholder: "请输入类别名称"
    }
  ]
};
