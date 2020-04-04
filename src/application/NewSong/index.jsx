/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionTypes from "./store/actionCreators.js";
import Loading from "../../components/utils/loading/index";
import SongList from "../SongList/index";
import * as S from "./style.js";

const NewSong = memo(({ ...props }) => {
  console.log("NewSong_props: ", props);
  const { newSongList, enterLoading } = props;
  const { getNewSongListDataDispatch } = props;

  useEffect(() => {
    if (!newSongList.length) {
      getNewSongListDataDispatch();
    }
  }, [newSongList]);

  return enterLoading ? <Loading /> : <NewSongList newSongList={newSongList} />;
});

const NewSongList = ({ ...props }) => {
  const { newSongList } = props;
  if (!newSongList.length) return "";

  // 更改数据操作权限，获取前5个数据
  let newRecommendSongList = newSongList.map(item => Object.assign({}, item));
  const splitedRecommendSongList = newRecommendSongList.splice(0, 6);
  return (
    <S.NewSongListContainer>
      <div className="title_and_more">
        <div className="title">新歌速递</div>
        <Link
          className="more_recommend"
          to={{
            pathname: "/discover"
          }}
        >
          查看更多 <i className="iconfont .icon_right">&#xe6a1;</i>
        </Link>
      </div>
      <div className="song_list_container">
        <SongList songList={splitedRecommendSongList} />
      </div>
    </S.NewSongListContainer>
  );
};

const mapStateToProps = state => {
  return {
    newSongList: state.newsong.newSongList,
    enterLoading: state.newsong.enterLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewSongListDataDispatch() {
      dispatch(actionTypes.getNewSongList());
      dispatch(actionTypes.changeEnterLoading(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSong);
