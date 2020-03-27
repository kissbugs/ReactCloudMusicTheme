/* eslint-disable no-fallthrough */
import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  recomendList: [],
  newSongList: [],  
  enterLoading: true
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recomendList = action.data
    case actionTypes.CHANGE_RECOMMEND_NEW_SONG:
      draft.newSongList = action.data
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
  }
}, initialState)