import { createAlova } from "alova";
import VueHook from "alova/vue"; // 如果使用 Vue
import adapterFetch from "alova/fetch";

const alovaInstance = createAlova({
  baseURL: "https://api.example.com",
  requestAdapter: adapterFetch(),
  statesHook: VueHook,
  responded: (response) => response.json(),
  beforeRequest(method) {
    method.config.headers["Authorization"] = "Bearer token";
  },
});

export default alovaInstance;
