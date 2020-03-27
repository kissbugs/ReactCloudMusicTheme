import * as actionCreators from "./constants"
import { getTopNewSongRequest } from "../../../api/request";

export const changeTopNewSongList = data => ({
  type: actionCreators.CHANGE_TOP_NEW_SONG,
  data
})

export const changeEnterLoading = data => ({
  type: actionCreators.CHANGE_ENTER_LOADING,
  data
})

export const getTopNewSongList = query => {
  return (dispatch) => {
    getTopNewSongRequest(query).then((data) => {
      const action = changeTopNewSongList(data.data)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取新歌速递列表出错: ", e)
    })
  }
}