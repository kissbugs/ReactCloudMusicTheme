import * as actionTypes from "./constants"
import produce from "immer"

const initialState = {
  bannerList: [],
  recomendList: []
}
export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      draft.bannerList = action.data
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recomendList = action.data
  }
}, initialState)