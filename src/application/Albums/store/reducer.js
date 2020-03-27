/* eslint-disable no-fallthrough */
import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  albums: {},
  enterLoading: false
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SET_ALBUMS:
      draft.albums = action.data
    case actionTypes.SET_ENTER_LOADING:
      draft.enterLoading = action.data
  }
}, initialState)