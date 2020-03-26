/**
 * getBannerRequest(data).then(xx => todo).catch(xx => todo)
 */
import { axiosInstance } from './axios';

// 获取banner图列表
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// 获取推荐全部列表
export const getRecommendListRequest = (count = 30) => {
  return axiosInstance.get(`/personalized?limit=${count}`)
}

// 获取歌单分类（流派）
export const getCategoryPlayListRequest = () => {
  return axiosInstance.get("/playlist/catlist")
}

// 获取热门歌手列表
export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

// 获取歌手列表
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

// 获取排行榜列表
export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

// 获取唱片详情
export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

// 获取歌手信息
export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};

// 获取热搜列表(详细)
export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot/detail`);
};

// 获取搜索建议
export const getSuggestListRequest = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

// 获取搜索
export const getResultSongsListRequest = query => {
  return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
};

// 获取歌词请求
export const getLyricRequest = id => {
  return axiosInstance.get(`/lyric?id=${id}`);
};

export const loginByPhoneRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};

export const sentVcodeRequest = phone => {
  return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};

export const loginByVcodeRequest = (phone, vcode) => {
  return axiosInstance.get(`/captcha/verify?phone=${phone}&captcha=${vcode}`);
};