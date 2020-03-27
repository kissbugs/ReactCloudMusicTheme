import * as actionTypes from "./constants"
import { getHotKeyWordsRequest, getSuggestListRequest, getResultSongsListRequest } from "../../../api/request"

export const changeHotKeyWords = (data) => ({
  type: actionTypes.SET_HOT_KEYWORDS,
  data
})

export const changeSuggestList = (data) => ({
  type: actionTypes.SET_SEARCH_SUGGEST_LIST,
  data
})

export const changeResultSongList = (data) => ({
  type: actionTypes.SET_SEARCH_RESULT_LIST,
  data
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getHotKeyWords = () => {
  return (dispatch) => {
    getHotKeyWordsRequest().then(data => {
      const action = changeHotKeyWords(data.data)
      dispatch(action)
      // dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取热搜关键词出错：", e);
    })
  }
}
export const getSearchSuggestList = (query) => {
  return (dispatch) => {
    getSuggestListRequest(query).then(data => {
      if (!data) return;
      let res = data.result || [];
      const action = changeSuggestList(res)
      dispatch(action)
      // dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取搜索出错：", e);
    })
  }
}
export const getSearchResultSongList = (query) => {
  return (dispatch) => {
    getResultSongsListRequest(query).then(data => {
      if (!data) return;
      let res = data.result.songs || [];
      const action = changeResultSongList(res)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取搜索结果出错：", e);
    })
  }
}