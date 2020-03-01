// 将相应的模块store中的index文件, 在全局的store中进行注册


import { combineReducers } from "redux";
// import { reducer as detailsReducer} from "../application/Details/store/index""
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as searchReducer } from "../application/Search/store/index";

const reducer = combineReducers({
  recommend: recommendReducer,
  search: searchReducer
})

export default reducer;