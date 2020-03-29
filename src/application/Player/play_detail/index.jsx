/* eslint-disable react/no-danger-with-children */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useCallback } from "react";
import CallBackButton from "../../../components/utils/callback/CallBack";
import * as S from "./style.js";
import LazyLoad from "react-lazyload";
import music_2 from "../../../assets/images/music_2.png";

export default memo(({ onClose }) => {
  const handleBackClick = useCallback(() => {
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  }, []);
  return (
    <S.PlayDetailContainer>
      <CallBackButton
        handleBackClick={onClose}
        // handleBackClick={handleBackClick}
        title="播放详情页"
      />
      <div className="play_detail_container">
        <LazyLoad
          placeholder={
            <img width="100%" height="100%" src={music_2} alt="music" />
          }
        >
          <img
            src={
              "http://p1.music.126.net/wvnIU5Rf3Ty1MnqaBXfY5Q==/109951164839904183.jpg"
            }
            width="100%"
            height="100%"
            alt="music"
          />
        </LazyLoad>
        <S.PlayDetailTime>
          <div className="song_count_down">3:34</div>
          <div className="song_total_time">/5:00</div>
        </S.PlayDetailTime>
        <S.PlayDetailProgressBarBox>
          <div
            className="active_progress_width"
            style={{
              backgroundImage: `linear-gradient(90deg, rgb(254, 221, 39) 0px, rgb(254, 221, 39) 30%, rgb(245, 245, 245) 30%)`
            }}
          >
            <div
              className="play_active_width"
              style={{
                left: "30%"
              }}
            ></div>
          </div>
        </S.PlayDetailProgressBarBox>
        <S.PlayDetailStatus>
          <div className="detail_status_list">
            <i className="iconfont prev">&#xe69d;</i>
            <i
              className="iconfont play_pause"
              // dangerouslySetInnerHTML={{
              //   __html: playing ? "&#xe668;" : "&#xe607;"
              // }}
            >
              &#xe607;
            </i>
            <i className="iconfont next">&#xe6a1;</i>
          </div>
        </S.PlayDetailStatus>
      </div>
    </S.PlayDetailContainer>
  );
});
