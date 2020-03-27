import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  topNewSongList: [],
  enterLoading: true
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_NEW_SONG:
      draft.topNewSongList = action.data;
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data;
  }
}, initialState)