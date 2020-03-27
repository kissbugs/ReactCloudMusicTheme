/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import music_2 from "../../assets/images/music_2.png";
import * as S from "./style.js";

import * as actionTypes from "./store/actionCreators.js";
import Loading from "../../components/utils/loading/index"
import { playCount } from "../../api/helper.js";
import Banner from "../../application/Banner/index"
import NewSong from "../../application/NewSong/index";
import TopMenuLayout from "../../components/utils/TopMenuLayout.jsx"

const Recommend = memo(({ ...props }) => {
  const {
    recommendList,
    enterLoading
  } = props;
  const {
    getRecommendListDataDispatch
  } = props;

  useEffect(() => {
    if (!recommendList.length) {
      getRecommendListDataDispatch(5);
    }
  }, [recommendList]);

  return enterLoading ? (
    <Loading />
  ) : (
    <S.RecommendContainer>
      <RecommendList recommendList={recommendList} />
    </S.RecommendContainer>
  );
});


const RecommendList = ({ ...props }) => {
  const { recommendList } = props;
  if (!recommendList.length) return "";
  // let newRecommendList = recommendList.map(item => Object.assign({}, item));
  // const splitedRecommendList = [];
  // while (newRecommendList.length) {
  //   const sliced = newRecommendList.splice(0, 3);
  //   splitedRecommendList.push({
  //     value: sliced
  //   });
  // }
  // console.log("splitedRecommendList: ", splitedRecommendList);
  return (
    <div className="recommend_list_container">
      <div className="title_and_more">
        <div className="title">推荐歌单</div>
        <Link
          className="more_recommend"
          to={{
            pathname: "/albums"
          }}
        >
          查看更多 <i className="iconfont .icon_right">&#xe6a1;</i>
        </Link>
      </div>
      <ul className="recommend_list_box">
        {recommendList.map((item, index) => (
          <li key={index}>
            <Link
              to={{
                pathname: "/playlist",
                search: `?id=${item.id}`
              }}
            >
              <div className="count_img_box">
                <div className="play_count_box">
                  <div className="play_count">
                    <i className="iconfont icon_listen">&#xe8b2;</i>
                    {playCount(item.playCount)}
                  </div>
                </div>
                <LazyLoad
                  placeholder={
                    <img width="100%" height="100%" src={music_2} alt="music" />
                  }
                >
                  <img
                    src={item.picUrl + "?param=300x300"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              {/* <div className="name">{sliceStringText(item.name, 30)}</div> */}
              <div className="name">{item.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    recommendList: state.recommend.recomendList,
    enterLoading: state.recommend.enterLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRecommendListDataDispatch(query) {
      dispatch(actionTypes.getRecommendList(query));
      dispatch(actionTypes.changeEnterLoading(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
