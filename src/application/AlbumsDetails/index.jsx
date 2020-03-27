import React, { memo, useEffect, useCallback, useState, useMemo } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import Loading from "../../components/utils/loading/index";
import { getSongUrl } from "../../api/helper";
import CallBackButton from "../../components/utils/callback/CallBack";
import Player from "../Player/index";
import * as S from "./style.js";

const AlbumsDetails = memo(({ ...props }) => {
  const { albumList, enterLoading } = props;
  const { getAlbumsListDataDispatch } = props;
  const [songUrl, setSongUrl] = useState("");
  const [currIndex, setCurrIndex] = useState("");

  const id = props.location.search.split("=")[1];
  useEffect(() => {
    getAlbumsListDataDispatch("3206098087");
  }, [getAlbumsListDataDispatch]);

  const [back, setBack] = useState(true);
  const handleBackClick = useCallback(() => {
    setBack(false);
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  }, []);

  const renderTopAlbumsBrief = () => {
    return (
      <div className="albums_main_description">
        <img src={albumList.coverImgUrl} alt="" />
      </div>
    );
  };

  const reduceMapArName = ar =>
    ar.reduce((acc, cur, index) => {
      if (index === ar.length - 1) {
        return acc + `${cur.name}`;
      }
      return acc + `${cur.name}/`;
    }, "");

  const handleSongList = (list, index) => {
    setSongUrl(getSongUrl(list.id));
    // setCurrIndex(index);
  };

  const renderAlbumsLists = () => {
    return (
      <div className="albums_lists_box">
        {albumList.creator && (
          <div className="nick_name_box">
            <img src={albumList.creator.avatarUrl} alt="" />
            <div className="nickname">{albumList.creator.nickname}</div>
          </div>
        )}
        <div className="album_description">{albumList.description}</div>
        <div className="play_list_entrance">
          <div className="left_play_number">
            <i
              className="iconfont icon_play"
              onClick={() => setSongUrl(getSongUrl(albumList.tracks[0].id))}
            >
              &#xe668;
            </i>
            {/* <i className="iconfont icon_pause">&#xe607;</i> */}
            <span>{`共${albumList.tracks.length}首`}</span>
          </div>
          {/* <div className="right_play_menu">
            <i className="iconfont lef_menu">&#xe615;</i>
          </div> */}
        </div>
        <ul>
          {albumList.tracks &&
            albumList.tracks.length &&
            albumList.tracks.map((list, index) => (
              <li
                key={list.id}
                className={`${
                  songUrl == getSongUrl(list.id) ? "song_active" : ""
                }`}
                onClick={() => handleSongList(list, index)}
              >
                <span>{index + 1}</span>
                <div className="li_box">
                  {/* <img src={albumList.coverImgUrl} alt="" /> */}
                  <div className="album_info">
                    <div className="title">{list.name}</div>
                    <div className="description">{`${reduceMapArName(
                      list.ar
                    )}-${albumList.name}`}</div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return enterLoading ? (
    <Loading />
  ) : (
    <S.AlbumsContainer className={`animated ${back ? "rollIn" : "rollOut"}`}>
      <CallBackButton handleBackClick={handleBackClick} title="歌单列表" />
      <div
        className={`albums_container ${
          songUrl ? "albums_container_song" : ""
        } clear_scroll_bar`}
      >
        {renderTopAlbumsBrief()}
        {albumList.tracks && renderAlbumsLists()}
      </div>
      {songUrl && (
        <Player
          songUrl={songUrl}
          // playList={albumList.tracks}
          // currentIndex={currIndex}
        />
      )}
    </S.AlbumsContainer>
  );
});

// 映射redux全局的state到组件的props上
const mapStateToProps = state => {
  // TODO: 注（这块是出错的重点）
  // 如果这里state取不到state中值，请确定在全局的reducer.js是否正确的讲该项的值正确导出
  return {
    albumList: state.albums_detail.albumList,
    enterLoading: state.albums_detail.enterLoading
  };
};

// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    getAlbumsListDataDispatch(id) {
      dispatch(actionTypes.changeEnterLoading(true));
      dispatch(actionTypes.getAlbumList(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsDetails);
