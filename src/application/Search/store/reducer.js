import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  hotKeyWordsList: [],
  searchSuggestList: [],
  searchResultSongsList: [],
  enterLoading: false
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SET_HOT_KEYWORDS:
      draft.hotKeyWordsList = action.data
    case actionTypes.SET_SEARCH_SUGGEST_LIST:
      draft.searchSuggestList = action.data
    case actionTypes.SET_SEARCH_RESULT_LIST:
      draft.searchResultSongsList = action.data
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
  }
}, initialState)