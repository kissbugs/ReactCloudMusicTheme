import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import SlideCarousel from "../../components/slide_carousel/index.jsx";
import * as actionTypes from "./store/actionCreators.js";
import Loading from "../../components/utils/loading/index";
import SongList from "../SongList/index";
import * as S from "./style.js";
import * as Components from "./components";

const ThemeColor = [
  {
    background: "#ffdfd9",
    font: "#99594d",
    titleBorder: "#ff6a4d",
    shadow: "128,74,64,0.5"
  },
  {
    background: "#fff9d9",
    font: "#998c4d",
    titleBorder: "#ccbb66",
    shadow: "128,117,64,0.5"
  },
  {
    background: "#d9ffe5",
    font: "#4d9966",
    titleBorder: "#3dcc6d",
    shadow: "64,128,85,0.5"
  },
  {
    background: "#d9f2ff",
    font: "#4d8099",
    titleBorder: "#4dc3ff",
    shadow: "64,106,128,0.5"
  },
  {
    background: "#d9d9ff",
    font: "#4d4d99",
    titleBorder: "#8080ff",
    shadow: "64,64,128,0.5"
  },
  {
    background: "#ecd9ff",
    font: "#734d99",
    titleBorder: "#bf80ff",
    shadow: "96,64,128,0.5"
  },
  {
    background: "#ffd9df",
    font: "#994d59",
    titleBorder: "#ff8095",
    shadow: "128,64,74,0.5"
  },
  {
    background: "#d9fff9",
    font: "#4d998c",
    titleBorder: "#45e6cb",
    shadow: "64,128,117,0.5"
  },
  {
    background: "#e5ffd9",
    font: "#66994d",
    titleBorder: "#74d941",
    shadow: "85,128,64,0.5"
  },
  {
    background: "#ffecd9",
    font: "#99734d",
    titleBorder: "#ffa64d",
    shadow: "128,96,64,0.5"
  }
];

const Recommend = memo(({ ...props }) => {
  console.log("recommend_props-----: ", props);
  const { bannerList, recommendList, categoryPlayList, enterLoading } = props;
  const {
    getBannerListDataDispatch,
    getRecommendListDataDispatch,
    getCategotyPlayListDataDispatch
  } = props;

  useEffect(() => {
    // if (!bannerList) {
    getBannerListDataDispatch();
    getRecommendListDataDispatch(6);
    // getCategotyPlayListDataDispatch();
    // }
  }, []);

  return (
    <S.RecommendContainer>
      <SlideCarousel bannerList={bannerList} />
      {/* {categoryPlayList.length > 0 && (
        // 歌曲流派 · 歌单分类
        <Components.CategoryPlaylist
          categoryPlayList={categoryPlayList}
          ThemeColor={ThemeColor}
        />
      )} */}
      {<Components.RecommendList {...props} />}
      {enterLoading ? <Loading></Loading> : null}
    </S.RecommendContainer>
  );
});

const mapStateToProps = state => {
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recomendList,
    categoryPlayList: state.recommend.categoryPlayList,
    enterLoading: state.recommend.enterLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBannerListDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch(query) {
      dispatch(actionTypes.getRecommendList(query));
    },
    // changeEnterLoadingDispatch(data) {
    //   dispatch(changeEnterLoading(data));
    // },
    // getCategotyPlayListDataDispatch() {
    //   dispatch(actionTypes.getCategoryPlayList());
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
