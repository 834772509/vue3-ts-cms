let BASE_URL: string;
let TIME_OUT: number = 3000;

if (import.meta.env.MODE === "development") {
  BASE_URL = "http://httpbin.org/";
} else if (import.meta.env.MODE === "production") {
  BASE_URL = "http://httpbin.org/";
} else {
  // test
  BASE_URL = "http://httpbin.org/";
}

export { BASE_URL, TIME_OUT };
