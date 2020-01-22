import * as actionTypes from "./constants"
import { getBannerRequest, getRecommendListRequest } from "../../../api/request"

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      console.error("getBannerList_data: ", data);
      const action = changeBannerList(data.banners)
      dispatch(action)
    }).catch(e => {
      console.error("bannerList_error: ", e)
    })
  }
}


export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      console.log("getRecommendListRequest_data: ", data);
      const action = changeRecommendList(data.result)
      dispatch(action)
    }).catch(e => {
      console.error("recommendList_error: ", e);
    })
  }
}