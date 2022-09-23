import axios from "axios";
import type { AxiosInstance } from "axios";
import type { RequestInterceptors, requestConfig } from "./type";
import { ElLoading } from "element-plus";

const DEFAULT_LOADING = false;

class request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  showLoading: boolean;
  loading?: any;

  constructor(config: requestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: "正在加载~~~"
          });
        }
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close();
        return res.data;
      },
      (err) => {
        // 将loading移除
        this.loading?.close();
        return err;
      }
    );
  }

  request<T>(config: requestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2. 判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoading设置默认值，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置默认值，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }

  get<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}
export default request;
