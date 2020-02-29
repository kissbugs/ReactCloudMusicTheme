import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import SlideCarousel from "../../components/slide_carousel/index.jsx";
import * as actionTypes from "./store/actionCreators.js";
import * as S from "./style.js";

const Recommend = props => {
  console.log("recommend_props-----: ", props);
  const { bannerList, recommendList } = props;
  const { getBannerListDataDispatch, getRecommendListDataDispatch } = props;
  
  console.log('bannerList: ', bannerList);
  console.log('recommendList: ', recommendList);

  useEffect(() => {
    // if (!bannerList) {
      getBannerListDataDispatch();
      getRecommendListDataDispatch();
    // }
  }, []);

  return (
    <S.RecommendContainer>
       {/* 轮播组件 */}
      <SlideCarousel bannerList={bannerList} />
      {/* <CategoryPlaylist /> */}
    </S.RecommendContainer>
  );
};


// 歌曲流派 · 歌单分类
const CategoryPlaylist = () => {
  return (
    <div className="song_genre_box">
      <div className="song_genre_top">
        <div className="text">歌曲流派</div>
        <div className="more_genre">查看更多</div>
      </div>
      <ul className="song_genre_content">
        <li>
          hello
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  console.error('state: ', state);
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recomendList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBannerListDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch(){
      dispatch(actionTypes.getRecommendList())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
