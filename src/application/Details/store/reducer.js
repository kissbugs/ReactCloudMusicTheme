// 存放initialState和reducer函数

import * as actionTypes from "./constants"

export default (state = 0, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_PLUS:
      return state + action.data
    case actionTypes.DETAIL_MINUS:
      return state - action.data
    default:
      return state
  }
}