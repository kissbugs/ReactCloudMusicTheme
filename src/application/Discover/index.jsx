/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import CallBackButton from "../../components/utils/callback/CallBack";
import Loading from "../../components/utils/loading/index";
import LazyLoad from "react-lazyload";
import { getSongUrl } from "../../api/helper";
import Player from "../Player/index";
import music_2 from "../../assets/images/music_2.png";
import { TabPane, Tabs } from "../../components/tabs/index";

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
              <SongListBox topNewSongList={topNewSongList} />
            )}
          </TabPane>
        ))}
      </Tabs>
    </S.DiscoverContainer>
  );
});

const SongListBox = memo(({ ...props }) => {
  const { topNewSongList } = props;
  return (
    <S.SongListBox>
      <ul>
        {topNewSongList.map((item, index) => (
          <li
            key={index}
            // className={`${songUrl == getSongUrl(item.id) ? "song_active" : ""}`}
            // onClick={() => handleSongList(item, index)}
          >
            <div className="left_content">
              <LazyLoad
                placeholder={
                  <img width="100%" height="100%" src={music_2} alt="music" />
                }
              >
                <img
                  src={item.album.picUrl + "?param=50x50"}
                  width="100%"
                  height="100%"
                  alt="music"
                />
              </LazyLoad>
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
