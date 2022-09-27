import request from "../../index";
import type { IDataType } from "../../types";

export function getPageListData(url: string, queryInfo: any) {
  return request.post<IDataType>({
    url: url,
    data: queryInfo
  });
}
