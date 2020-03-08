import React, { memo, useEffect, useCallback, useState, useMemo } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import Loading from "../../basicModule/loading/index";
import { getSongUrl } from "../../api/helper";
import Player from "../Player/index";
import * as S from "./style.js";

const Albums = memo(({ ...props }) => {
  console.log("Albums_props: ", props);

  const { albumList, enterLoading } = props;
  const { getAlbumsListDataDispatch } = props;
  const [songUrl, setSongUrl] = useState("");

  console.log("albumList: ", albumList);

  const id = props.location.search.split("=")[1];
  console.log("id: ", id);
  useEffect(() => {
    getAlbumsListDataDispatch(id);
  }, [getAlbumsListDataDispatch, id]);

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
        <div className="album_main_picture">
          <img src={albumList.coverImgUrl} alt="" />
          <div className="album_description">{albumList.description}</div>
        </div>
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

  const renderAlbumsLists = () => {
    return (
      <div className="albums_lists_box">
        <div className="play_list_entrance">
          <div className="left_play_number">
            {/* <i className="iconfont icon_play">&#xe668;</i> */}
            <i className="iconfont icon_pause">&#xe607;</i>
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
                onClick={() => setSongUrl(getSongUrl(list.id))}
              >
                <span>{index + 1}</span>
                <div className="li_box">
                  <img src={albumList.coverImgUrl} alt="" />
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

  return (
    <S.AlbumsContainer className={`animated ${back ? "rollIn" : "rollOut"}`}>
      <div className="back_title" onClick={handleBackClick}>
        <i className="iconfont icon_left">&#xe69d;</i>
        <div className="title">歌单列表</div>
      </div>
      <div
        className={`albums_container ${
          songUrl ? "albums_container_song" : ""
        } clear_scroll_bar`}
      >
        {renderTopAlbumsBrief()}
        {albumList.tracks && renderAlbumsLists()}
      </div>
      {enterLoading ? <Loading></Loading> : null}
      {songUrl && <Player songUrl={songUrl} />}
    </S.AlbumsContainer>
  );
});

// 映射redux全局的state到组件的props上
const mapStateToProps = state => {
  // TODO: 注（这块是出错的重点）
  // 如果这里state取不到state中值，请确定在全局的reducer.js是否正确的讲该项的值正确导出
  return {
    albumList: state.albums.albumList,
    enterLoading: state.albums.enterLoading
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

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
