/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import CallBackButton from "../../components/utils/callback/CallBack";
import Loading from "../../components/utils/loading/index";
import { TabPane, Tabs } from "../../components/tabs/index";
import { musicType } from "../../api/config";
import SongList from "../SongList/index";
import ReactPlaceholder from "react-placeholder";

import type_music from "../../assets/images/type_music.jpg";

import * as S from "./style.js";

const Discover = memo(({ ...props }) => {
  const [typeKey, setTypeKey] = useState(0); // 初始 '全部'
  const [activeIndex, setActiveIndex] = useState(0);
  const [typeName, setTypeName] = useState("全部");
  const { topNewSongList, enterLoading } = props;
  const { getTopNewSongListDataDispatch } = props;
  const new_song_type = Object.values(musicType);

  useEffect(() => {
    if (!topNewSongList.length) {
      getTopNewSongListDataDispatch(typeKey);
    }
  }, []);

  const handleBackClick = useCallback(() => {
    props.history.goBack();
  }, []);

  // 通过已知name, 找到对应的key值
  const findTypeKey = useCallback((obj, value, compare = (a, b) => a === b) => {
    return Object.keys(obj).find((k) => compare(obj[k], value));
  }, []);

  const tabClick = (e, activeTabId) => {
    const nameType = new_song_type[activeTabId];
    const targetKey = findTypeKey(musicType, nameType);
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
            <ReactPlaceholder
              type="media"
              rows={15}
              showLoadingAnimation={true}
              ready={enterLoading ? false : true}
            >
              {enterLoading ? (
                <Loading />
              ) : (
                <SongListBox
                  topNewSongList={topNewSongList}
                  typeName={typeName}
                />
              )}
            </ReactPlaceholder>
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
          <span>最/新/单/曲{`（${topNewSongList.length}首）`}</span>
        </div>
      </div>
      <SongList songList={topNewSongList} />
    </S.SongListBox>
  );
});

const mapStateToProps = (state) => {
  return {
    topNewSongList: state.discover.topNewSongList,
    enterLoading: state.discover.enterLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopNewSongListDataDispatch(query) {
      dispatch(actionTypes.getTopNewSongList(query));
      dispatch(actionTypes.changeEnterLoading(true));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
