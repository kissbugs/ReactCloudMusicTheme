/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import CallBackButton from "../../components/utils/callback/CallBack";
import Loading from "../../components/utils/loading/index";
import { getSongUrl } from "../../api/helper";
import Player from "../Player/index";
import { TabPane, Tabs } from "../../components/tabs/index";

import type_music from "../../assets/images/type_music.jpg";

import * as S from "./style.js";

const TYPE = {
  0: "全部",
  7: "华语",
  96: "欧美",
  8: "日本",
  16: "韩国"
};

const Discover = memo(({ ...props }) => {
  const [typeKey, setTypeKey] = useState(0); // 初始 '全部'
  const [activeIndex, setActiveIndex] = useState(0);
  const [typeName, setTypeName] = useState("全部");
  const { topNewSongList, enterLoading } = props;
  const { getTopNewSongListDataDispatch } = props;
  const new_song_type = Object.values(TYPE);

  useEffect(() => {
    if (!topNewSongList.length) {
      getTopNewSongListDataDispatch(typeKey);
    }
  }, []);

  const handleBackClick = useCallback(() => {
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  }, []);

  // 通过已知name, 找到对应的key值
  const findTypeKey = useCallback((obj, value, compare = (a, b) => a === b) => {
    return Object.keys(obj).find(k => compare(obj[k], value));
  }, []);

  const tabClick = (e, activeTabId) => {
    const nameType = new_song_type[activeTabId];
    const targetKey = findTypeKey(TYPE, nameType);
    setTypeName(nameType);
    setTypeKey(targetKey);
    setActiveIndex(activeTabId);
    getTopNewSongListDataDispatch(targetKey);
  };

  return (
    <S.DiscoverContainer>
      <CallBackButton handleBackClick={handleBackClick} title="新歌速递" />
      <Tabs
        styles="tabs"
        defaultAction={tabClick}
        defaultActiveIndex={Number(activeIndex)}
      >
        {new_song_type.map((menu, index) => (
          <TabPane key={index} tab={menu} activeStyle="active" styles="tab">
            {enterLoading ? (
              <Loading />
            ) : (
              <SongListBox
                topNewSongList={topNewSongList}
                typeName={typeName}
              />
            )}
          </TabPane>
        ))}
      </Tabs>
    </S.DiscoverContainer>
  );
});

const SongListBox = memo(({ ...props }) => {
  const { topNewSongList, typeName } = props;
  return (
    <S.SongListBox>
      <div className="music_type_box">
        <img src={type_music} alt="" />
        <div className="title">
          {typeName}
          <span>最/新/单/曲</span>
        </div>
      </div>
      <div className="left_play_number">
        <i
          className="iconfont icon_play"
          // onClick={() => setSongUrl(getSongUrl(albumList.tracks[0].id))}
        >
          &#xe668;
        </i>
        {/* <i className="iconfont icon_pause">&#xe607;</i> */}
        <span>{`共${topNewSongList.length}首`}</span>
      </div>
      <ul>
        {topNewSongList.map((item, index) => (
          <li
            key={index}
            // className={`${songUrl == getSongUrl(item.id) ? "song_active" : ""}`}
            // onClick={() => handleSongList(item, index)}
          >
            <div className="left_content">
              <img src={item.album.picUrl + "?param=50x50"} alt="music" />

              <div className="album_info">
                <div className="title">{item.name}</div>
                {item.album.artists && (
                  <div className="description">
                    {item.album.artists.map(item => `${item.name} `)}
                  </div>
                )}
              </div>
            </div>
            <div className="song_list_number">···</div>
          </li>
        ))}
      </ul>
    </S.SongListBox>
  );
});

const mapStateToProps = state => {
  return {
    topNewSongList: state.discover.topNewSongList,
    enterLoading: state.discover.enterLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopNewSongListDataDispatch(query) {
      dispatch(actionTypes.getTopNewSongList(query));
      dispatch(actionTypes.changeEnterLoading(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
