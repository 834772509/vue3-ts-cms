type IFormType = "input" | "password" | "select" | "datepicker";

export interface IFormItem {
  type: IFormType;
  label: String;
  rules?: any[];
  placeholder?: any;
  // 针对select
  options?: any[];
  // 针对特殊的属性
  otherOptions?: any;
}
