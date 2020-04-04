import axios from 'axios';
export const baseApiUrl = "https://api.kissvon.cn/"
const axiosInstance = axios.create({
  baseURL: baseApiUrl
})
axiosInstance.interceptors.request.use(config => {
  // 设置请求拦截器
  return config;
}, (_err) => {
  return Promise.reject(_err)
});

axiosInstance.interceptors.response.use(
  res => {
    // 设置相应拦截器
    return res.data
  },
  _err => {
    console.error(_err, "网络错误");
  }
);

export { axiosInstance };