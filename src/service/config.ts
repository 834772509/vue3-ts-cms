// 超时时间
export const TIME_OUT: number = 3000;

// 区分环境变量(判断环境变量)
// if (import.meta.env.MODE === "development") {
//   BASE_URL = "";
// } else if (import.meta.env.MODE === "production") {
//   BASE_URL = "";
// } else {
//   // test
//   BASE_URL = "";
// }

// 区分环境变量(读取环境变量文件)
export const BASE_URL = import.meta.env.VITE_BASE_URL;
