/**
 * getBannerRequest(data).then(xx => todo).catch(xx => todo)
 */
import { axiosInstance } from './axios';

// 获取banner图列表
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};