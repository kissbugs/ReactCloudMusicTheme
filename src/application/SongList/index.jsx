/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState, useMemo, forwardRef } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../Player/store/actionCreators.js";
import * as S from "./style.js";

const SongList = forwardRef(({ ...props }) => {
  console.log("SongList_props: ", props);
  const { songList, fullScreen, playing, currentSong } = props;
  const {
    changePlayListDispatch,
    changeCurrentIndexDispatch,
    changeSequecePlayListDispatch
  } = props;
  /**
   * 抽离公共歌单列表组件
   * 首页：新歌速递·列表
   * discover：发现更多列表
   */
  const ContentInfo = ({ ...props }) => {
    const { pic, name, artists } = props;
    return (
      <div className="left_content">
        <img src={pic + "?param=50x50"} alt="music" />
        <div className="album_info">
          <div className="title">{name}</div>
          {artists && (
            <div className="description">
              {artists.map(item => `${item.name} `)}
            </div>
          )}
        </div>
      </div>
    );
  };

  const selectItem = (e, index) => {
    console.log("index: ", index);
    changePlayListDispatch(songList);
    changeSequecePlayListDispatch(songList);
    changeCurrentIndexDispatch(index);
  };
  return (
    <S.UlSongListContainer>
      {songList.map((item, index) => (
        <li
          key={index}
          className={`${currentSong.id == item.id ? "song_active" : ""}`}
          onClick={e => selectItem(e, index)}
        >
          {item.song ? (
            <ContentInfo
              pic={item.picUrl}
              name={item.song.name}
              artists={item.song.artists}
            />
          ) : (
            <ContentInfo
              pic={item.album.picUrl}
              name={item.name}
              artists={item.artists}
            />
          )}
          <div className="song_list_number">···</div>
        </li>
      ))}
    </S.UlSongListContainer>
  );
});

const mapStateToProps = state => {
  return {
    fullScreen: state.player.fullScreen,
    playing: state.player.playing,
    currentSong: state.player.currentSong
    // scrollY: state.player.scrollY
  };
};
// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    changePlayListDispatch(data) {
      dispatch(actionTypes.changePlayList(data));
    },
    changeCurrentIndexDispatch(data) {
      console.warn("-liwei--data: ", data);
      dispatch(actionTypes.changeCurrentIndex(data));
    },
    changeSequecePlayListDispatch(data) {
      dispatch(actionTypes.changeSequecePlayList(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SongList));
