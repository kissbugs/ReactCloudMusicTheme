import * as actionTypes from "./constants"
import { getRecommendListRequest } from "../../../api/request"

export const changeAlbums = (data) => ({
  type: actionTypes.SET_ALBUMS,
  data
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.SET_ENTER_LOADING,
  data
})

export const getAlbums = () => {
  return (dispatch) => {
    getRecommendListRequest().then((data) => {
      const action = changeAlbums(data.result)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error('获取推荐全部列表: ', e)
    })
  }
}