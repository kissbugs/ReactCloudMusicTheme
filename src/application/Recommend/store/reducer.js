import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  bannerList: [],
  recomendList: [],
  categoryPlayList: [],
  enterLoading: true
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      draft.bannerList = action.data
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recomendList = action.data
    case actionTypes.CHANGE_CATEGORY_PLAY_LIST:
      draft.categoryPlayList = action.data
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
  }
}, initialState)