import * as actionTypes from "./constants"
import { getBannerRequest, getRecommendListRequest, getCategoryPlayListRequest } from "../../../api/request"

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

export const changeCategoryPlayList = (data) => ({
  type: actionTypes.CHANGE_CATEGORY_PLAY_LIST,
  data
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      const action = changeBannerList(data.banners)
      dispatch(action)
    }).catch(e => {
      console.error("获取轮播图出错: ", e)
    })
  }
}


export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      const action = changeRecommendList(data.result)
      dispatch(action)
    }).catch(e => {
      console.error("获取推荐列表出错: ", e);
    })
  }
}

export const getCategoryPlayList = () => {
  return (dispatch) => {
    getCategoryPlayListRequest().then(data => {
      // console.log('data: ', data);
      const action = changeCategoryPlayList(data.sub)
      dispatch(action)
    }).catch(e => {
      console.error("获取歌单分类（流派）出错: ", e);
    })
  }
}