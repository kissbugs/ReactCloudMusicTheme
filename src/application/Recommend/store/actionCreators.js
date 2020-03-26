import * as actionTypes from "./constants"
import {
  getBannerRequest, 
  getRecommendListRequest, 
  getNewSongRequest, 
  getTopNewSongRequest,
  getCategoryPlayListRequest
} from "../../../api/request"

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

export const changeNewSongList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_NEW_SONG,
  data
});

export const changeTopNewSongList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_TOP_NEW_SONG,
  data
});

export const changeCategoryPlayList = (data) => ({
  type: actionTypes.CHANGE_CATEGORY_PLAY_LIST,
  data
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      const action = changeBannerList(data.banners)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取轮播图出错: ", e)
    })
  }
}


export const getRecommendList = (query) => {
  return (dispatch) => {
    getRecommendListRequest(query).then(data => {
      const action = changeRecommendList(data.result)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取推荐列表出错: ", e);
    })
  }
}

export const getNewSongList = () => {
  return (dispatch) => {
    getNewSongRequest().then(data => {
      console.log('推荐新音乐: ', data);
      const action = changeNewSongList(data.result)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取推荐新音乐列表出错: ", e);
    })
  }
}

export const getTopNewSongList = (query) => {
  return (dispatch) => {
    getTopNewSongRequest(query).then(data => {
      console.log('新歌速递: ', data);
      const action = changeTopNewSongList(data.data)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取新歌速递列表出错: ", e);
    })
  }
}

// export const getCategoryPlayList = () => {
//   return (dispatch) => {
//     getCategoryPlayListRequest().then(data => {
//       // console.log('data: ', data);
//       const action = changeCategoryPlayList(data.sub)
//       dispatch(action)
//       dispatch(changeEnterLoading(false))
//     }).catch(e => {
//       console.error("获取歌单分类（流派）出错: ", e);
//     })
//   }
// }