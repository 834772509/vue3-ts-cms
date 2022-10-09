import request from "../../index";
import type { IDataType } from "../../types";

// 获取数据
export function getPageListData(url: string, queryInfo: any) {
  return request.post<IDataType>({
    url: url,
    data: queryInfo
  });
}

// 删除数据
export function deletePageData(url: string) {
  return request.delete<IDataType>({
    url
  });
}

// 创建数据
export function createPageData(url: string, newData: any) {
  return request.post<IDataType>({
    url,
    data: newData
  });
}

// 编辑数据
export function editPageData(url: string, editData: any) {
  return request.patch<IDataType>({
    url,
    data: editData
  });
}
