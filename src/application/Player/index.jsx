/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/no-danger-with-children */
import React, {
  memo,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from "react";
import { formatAudioTime, getSongUrl, isEmptyObject } from "../../api/helper";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import CallBackButton from "../../components/utils/callback/CallBack";
import { getLyricRequest } from "./../../api/request";

import * as S from "./style";
import disco from "../../assets/images/disc.png";

const Player = ({ ...props }) => {
  console.log("Player_props: ", props);
  const [songDuration, setSongDuration] = useState("00:00");
  const [percentWidth, setPercentWidth] = useState(0);
  const [preSong, setPreSong] = useState({});
  const [currentPlayingLyric, setPlayingLyric] = useState("");

  const audioRef = useRef();
  const normalPlayerRef = useRef();

  const {
    speed,
    playing,
    currentSong,
    currentIndex,
    playList,
    mode,
    sequencePlayList,
    fullScreen
  } = props;
  const {
    togglePlayingDispatch,
    togglePlayListDispatch,
    changeCurrentIndexDispatch,
    changeCurrentDispatch,
    changePlayListDispatch,
    changeModeDispatch,
    toggleFullScreenDispatch,
    changeSpeedDispatch
  } = props;

  useEffect(() => {
    if (
      !playList.length ||
      currentIndex === -1 ||
      !playList[currentIndex] ||
      playList[currentIndex].id === preSong.id
    )
      return;
    let current = playList[currentIndex];
    console.log("useEffect_current: ", current);
    changeCurrentDispatch(current);
    setPreSong(current);
    setPlayingLyric("");
    audioRef.current.src = getSongUrl(current.id);
    audioRef.current.autoplay = true;
    // getLyric(current.id);
  }, [currentIndex, playList]);

  useEffect(() => {
    console.log("playing: ", playing);
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  // useEffect(() => {
  //   normalPlayerRef.current.style.display = "none";
  // }, []);

  const clickPlaying = (e, state) => {
    console.log("点击播放状态: ", state);
    e.stopPropagation();
    togglePlayingDispatch(state);
  };

  const handleOnProgressChange = curPercent => {
    const newTime = curPercent * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
    if (!playing) {
      togglePlayingDispatch(true);
    }
    if (currentLyric.current) {
      currentLyric.current.seek(newTime * 1000);
    }
  };

  const getLyric = id => {
    let lyric = "";
    if (currentLyric.current) {
      currentLyric.current.stop();
    }
    // 避免songReady恒为false的情况
    setTimeout(() => {
      songReady.current = true;
    }, 3000);
    getLyricRequest(id)
      .then(data => {
        lyric = data.lrc && data.lrc.lyric;
        if (!lyric) {
          currentLyric.current = null;
          return;
        }
        currentLyric.current = new Lyric(lyric, handleLyric, speed);
        currentLyric.current.play();
        currentLineNum.current = 0;
        currentLyric.current.seek(0);
      })
      .catch(() => {
        currentLyric.current = "";
        songReady.current = true;
        audioRef.current.play();
      });
  };

  const handleLoop = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const handleNext = () => {
    if (playList.length == 1) {
      handleLoop();
      return;
    }
    let index = Number(currentIndex) + 1;
    if (index === playList.length) index = 0;
    changeCurrentIndexDispatch(index);
  };

  const handleEnd = () => {
    handleNext();
  };

  const handlePlay = () => {};

  const handlePause = () => {};

  const handleOnTimeUpdate = () => {
    let currentTime = Math.floor(audioRef.current.currentTime);
    let duration = Math.floor(audioRef.current.duration);
    setSongDuration(formatAudioTime(duration - currentTime));
    let progressWidth = `${Math.round(100 * (currentTime / duration))}%`;
    console.log("progressWidth: ", progressWidth);
    setPercentWidth(progressWidth);
  };

  // 展开全屏
  const handleOpenFullScreenPlayer = () => {
    normalPlayerRef.current.style.display = "block";
  };

  // 小型播放器
  const MiniPlayer = () => {
    return (
      <div className="media_play_container">
        <div className="disco_box">
          <img
            src={disco}
            className={playing ? "disco_play" : "disco_pause"}
            alt=""
          />
        </div>
        <div className="time_play_box">
          <div
            className={`song_time ${playing ? "song_time_active" : ""}`}
            // onClick={handleOpenFullScreenPlayer}
          >
            {songDuration}
          </div>
          <div
            className={`play_status`}
            onClick={e => clickPlaying(e, playing ? false : true)}
          >
            <i
              className="iconfont icon_play"
              dangerouslySetInnerHTML={{
                __html: playing ? "&#xe607;" : "&#xe668;"
              }}
            ></i>
          </div>
        </div>
      </div>
    );
  };

  // 大型详情播放器
  const AudioPlayerDetail = () => {
    const handleBackClick = useCallback(() => {
      // normalPlayerRef.current.style.display = "none";
    }, []);

    return (
      <S.AudioPlayDetailContainer ref={normalPlayerRef}>
        <CallBackButton handleBackClick={handleBackClick} title="播放详情页" />
        <div className="play_detail_container">
          <img
            src={currentSong.picUrl}
            width="100%"
            height="100%"
            alt="music"
          />
          <S.PlayDetailTime>
            <div className="song_count_down">3:34</div>
            <div className="song_total_time">/5:00</div>
          </S.PlayDetailTime>
          <S.PlayDetailProgressBarBox>
            <div
              className="active_progress_width"
              style={{
                backgroundImage: `linear-gradient(90deg, rgb(254, 221, 39) 0px, rgb(254, 221, 39) ${percentWidth}, rgb(245, 245, 245) ${percentWidth})`
              }}
            >
              <div
                className="play_active_width"
                style={{
                  left: `${percentWidth}`
                }}
              ></div>
            </div>
          </S.PlayDetailProgressBarBox>
          <S.PlayDetailStatus>
            <div className="detail_status_list">
              <i className="iconfont prev">&#xe69d;</i>
              <i
                className="iconfont play_pause"
                dangerouslySetInnerHTML={{
                  __html: playing ? "&#xe607;" : "&#xe668;"
                }}
                onClick={e => clickPlaying(e, playing ? false : true)}
              ></i>
              <i className="iconfont next">&#xe6a1;</i>
            </div>
          </S.PlayDetailStatus>
        </div>
      </S.AudioPlayDetailContainer>
    );
  };

  return (
    <S.PlayerContainer>
      {/* isEmptyObject(currentSong) ? null : */}
      {/* <AudioPlayerDetail /> */}
      <MiniPlayer />
      <audio
        preload="auto"
        ref={audioRef}
        onTimeUpdate={handleOnTimeUpdate}
        onPause={handlePause}
        onPlay={handlePlay}
        onEnded={handleEnd}
      ></audio>
    </S.PlayerContainer>
  );
};

const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    // fullScreen: state.player.fullScreen,
    playing: state.player.playing,
    currentSong: state.player.currentSong,
    showPlayList: state.player.showPlayList,
    // mode: state.player.mode,
    // speed: state.player.speed,
    currentIndex: state.player.currentIndex,
    playList: state.player.playList,
    sequencePlayList: state.player.sequencePlayList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    togglePlayingDispatch(data) {
      dispatch(actionTypes.changePlayingState(data));
    },
    togglePlayListDispatch(data) {
      dispatch(actionTypes.changeShowPlayList(data));
    },
    changePlayListDispatch(data) {
      dispatch(actionTypes.changePlayList(data));
    },
    changeCurrentIndexDispatch(data) {
      console.warn("-当前歌曲索引-data: ", data);
      dispatch(actionTypes.changeCurrentIndex(data));
    },
    changeCurrentDispatch(data) {
      console.log("当前歌曲: ", data);
      dispatch(actionTypes.changeCurrentSong(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Player));
