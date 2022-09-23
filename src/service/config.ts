let BASE_URL: string;
let TIME_OUT: number = 3000;

if (import.meta.env.MODE === "development") {
  BASE_URL = "http://152.136.185.210:5000";
} else if (import.meta.env.MODE === "production") {
  BASE_URL = "http://152.136.185.210:5000";
} else {
  // test
  BASE_URL = "http://httpbin.org/";
}

export { BASE_URL, TIME_OUT };
