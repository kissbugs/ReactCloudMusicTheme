import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  albumList: {},
  enterLoading: false
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SET_ALBUM_LIST:
      draft.albumList = action.data
    case actionTypes.SET_ENTER_LOADING:
      draft.enterLoading = action.data
  }
}, initialState)