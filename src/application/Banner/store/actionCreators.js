import * as actionTypes from "./constants"
import {
  getBannerRequest
} from "../../../api/request"

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      const action = changeBannerList(data.banners)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取轮播图出错: ", e)
    })
  }
}