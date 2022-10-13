import type { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "类别名称",
      placeholder: "请输入类别名称"
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
};
