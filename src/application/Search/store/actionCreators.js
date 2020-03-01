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

export const getHotKeyWords = () => {
  return (dispatch) => {
    getHotKeyWordsRequest().then(data => {
      console.log('getHotKeyWordsRequest_data: ', data);
      const action = changeHotKeyWords(data.data)
      dispatch(action)
    }).catch(e => {
      console.error("获取热搜关键词出错：", e);
    })
  }
}
export const getSearchSuggestList= (query) => {
  return (dispatch) => {
    getSuggestListRequest(query).then(data => {
      console.error('getSuggestList_data: ', data);
      if (!data) return;
      let res = data.result || [];
      const action = changeSuggestList(res)
      dispatch(action)
    }).catch(e => {
      console.error("获取搜索出错：", e);
    })
  }
}
export const getSearchResultSongList = (query) => {
  return (dispatch) => {
    getResultSongsListRequest(query).then(data => {
      console.warn('getSearchResultSongList_data: ', data);
      if (!data) return;
      let res = data.result.songs || [];
      const action = changeResultSongList(res)
      dispatch(action)
    }).catch(e => {
      console.error("获取搜索结果出错：", e);
    })
  }
}