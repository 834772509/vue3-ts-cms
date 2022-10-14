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
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "desc",
      type: "input",
      label: "商品描述",
      placeholder: "请输入商品描述"
    },
    {
      field: "address",
      type: "input",
      label: "商品地区",
      placeholder: "请输入商品地区"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价格",
      placeholder: "请输入原价格"
    },
    {
      field: "newPrice",
      type: "input",
      label: "现价格",
      placeholder: "请输入现价格"
    },
    {
      field: "status",
      type: "select",
      label: "商品状态",
      placeholder: "请选择商品状态",
      options: [
        { title: "正常", value: 1 },
        { title: "下架", value: 0 }
      ]
    },
    {
      field: "imgUrl",
      type: "input",
      label: "商品图片",
      placeholder: "请输入商品图片"
    },
    {
      field: "inventoryCount",
      type: "input",
      label: "商品库存",
      placeholder: "请输入商品库存"
    }
  ]
};
