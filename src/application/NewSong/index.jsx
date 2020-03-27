import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionTypes from "./store/actionCreators.js";
import { getSongUrl } from "../../api/helper";
import LazyLoad from "react-lazyload";
import Loading from "../../components/utils/loading/index";
import Player from "../Player/index";
import music_2 from "../../assets/images/music_2.png";
import * as S from "./style.js";

const NewSong = memo(({ ...props }) => {
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
  const splitedRecommendSongList = newRecommendSongList.splice(0, 5);

  const [songUrl, setSongUrl] = useState("");

  const handleSongList = (list, index) => {
    setSongUrl(getSongUrl(list.id));
  };
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
        <ul>
          {splitedRecommendSongList.map((item, index) => (
            <li
              key={index}
              className={`${
                songUrl == getSongUrl(item.id) ? "song_active" : ""
              }`}
              onClick={() => handleSongList(item, index)}
            >
              <div className="left_content">
                <LazyLoad
                  placeholder={
                    <img width="100%" height="100%" src={music_2} alt="music" />
                  }
                >
                  <img
                    src={item.picUrl + "?param=50x50"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
                {item.song && (
                  <div className="album_info">
                    <div className="title">{item.song.name}</div>
                    {item.song.artists && (
                      <div className="description">
                        {item.song.artists.map(
                          (item, index) => `${item.name} `
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="song_list_number">···</div>
            </li>
          ))}
        </ul>
      </div>
      {songUrl && (
        <Player
          songUrl={songUrl}
          // playList={albumList.tracks}
          // currentIndex={currIndex}
        />
      )}
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
