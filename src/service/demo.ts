import axios from "axios";

axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 5000;

// axios的实例对象

// get请求
// axios
//   .get("/get", {
//     params: {
//       name: "coderwhy",
//       age: 18
//     },
//     // 每个请求单独的配置
//     timeout: 5000
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// post请求
// axios
//   .post("/post", {
//     data: {
//       name: "coderwhy",
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get("/get", { params: { name: "coderwhy", age: 18 } }),
    axios.post("/post", { data: { name: "coderwhy", age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data);
    console.log(res[1].data);
  });

// axios的拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求增加token
    // 2.isLoading动画
    console.log("请求成功的拦截");
    return config;
  },
  (err) => {
    console.log("请求发送错误");
    return err;
  }
);

// fn1: 数据相应成功(服务器正常的返回了数据 20x)
// fn2: 数据相应失败
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    return res;
  },
  (err) => {
    console.log("服务器响应失败");

    return err;
  }
);
