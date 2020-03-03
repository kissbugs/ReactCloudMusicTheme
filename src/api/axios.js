import axios from 'axios';
import { ToastManager } from "../components/utils/toast/index.jsx";
// var toast = null;

export const baseApiUrl = "https://a.kissvon.cn"
const axiosInstance = axios.create({
  baseURL: baseApiUrl
})
// let count = 0;
axiosInstance.interceptors.request.use(config => {
  // 设置请求拦截器
  // if (!toast) {
  //   toast = ToastManager.showLoading("数据加载中...");
  // }
  // count++;
  return config;
}, (_err) => {
  return Promise.reject(_err)
});

axiosInstance.interceptors.response.use(
  res => {
    // 设置相应拦截器
    // count--;
    // cancel();
    return res.data
  },
  _err => {
    console.error(_err, "网络错误");
  }
);

// const cancel = () => {
//   if (count == 0) {
//     toast.cancel();
//     count = 0;
//     toast = null;
//   }
// }

export { axiosInstance };