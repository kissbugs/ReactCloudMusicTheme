import * as actionTypes from "./constants"
import { getAlbumDetailRequest } from "../../../api/request"

export const changeAlbumList = (data) => ({
  type: actionTypes.SET_ALBUM_LIST,
  data
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.SET_ENTER_LOADING,
  data
})

export const getAlbumList = (id) => {
  return (dispatch) => {
    getAlbumDetailRequest(id).then((data) => {
      console.log('getAlbumList_data: ', data);
      const action = changeAlbumList(data.playlist)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error('获取歌单详情出错: ', e)
    })
  }
}