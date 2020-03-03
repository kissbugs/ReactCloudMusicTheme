import React, { memo, useState, useEffect, useRef } from "react";
import { formatAudioTime } from "../../api/helper";
import { connect } from "react-redux";
import * as S from "./style";
import disco from "../../assets/images/disc.png";

const Player = ({ ...props }) => {
  const { songUrl } = props;
  const audioRef = useRef();
  const [songDuration, setSongDuration] = useState("00:00");
  const [audioPlayPauseClass, setAudioPlayPauseClass] = useState("");
  const [countShowTime, setCountShowTime] = useState("");
  const [percentWidth, setPercentWidth] = useState(0);

  let isAudioPlayPause =
    !audioPlayPauseClass || audioPlayPauseClass == "btn-pause";

  useEffect(() => {
    // if (!audioRef.current.duration) {
    //   alert("音频出错");
    //   return;
    // }
    audioRef.current.load();
    audioRef.current.oncanplay = function() {
      setSongDuration(formatAudioTime(audioRef.current.duration));
      if (isNaN(audioRef.current.duration)) {
        alert("音频出错");
        return;
      }
    };
    audioRef.current.play();
  }, [songUrl]);

  const onEnded = e => {
    setAudioPlayPauseClass("btn-pause");
  };

  const onPlay = e => {
    setAudioPlayPauseClass("btn-play");
  };

  const onPause = e => {
    setAudioPlayPauseClass("btn-pause");
  };

  const onTimeUpdate = e => {
    // console.log("on Time Update");
    let currentTime = Math.floor(audioRef.current.currentTime);
    let duration = Math.floor(audioRef.current.duration);
    setSongDuration(formatAudioTime(duration - currentTime));
    let progressWidth = `${Math.round(100 * (currentTime / duration))}%`;
    setPercentWidth(progressWidth);
  };

  // const updateProgress = percent => {
  //   const duration = this.state.totalTime;
  //   var showTime = duration * (1 - percent) <= 0 ? 0 : duration * (1 - percent);
  //   if (isNaN(showTime)) {
  //     showTime = 0.0;
  //   }

  //   this.setState({
  //     width: Math.round(100 * percent) + "%",
  //     showTime: formatAudioTime(showTime)
  //   });
  // };

  const btnPlayClick = e => {
    // console.log("isAudioPlayPause: ", isAudioPlayPause);
    if (isAudioPlayPause) {
      audioRef.current.play();
      console.log("语音播放");
      setAudioPlayPauseClass("btn-play");
    } else {
      audioRef.current.pause();
      console.log("语音暂停");
      setAudioPlayPauseClass("btn-pause");
    }
  };

  // console.log("songDuration", songDuration);
  // console.log("percentWidth", percentWidth);

  return (
    <S.PlayerContainer>
      <div className="media_play_container">
        <div className="disco_box">
          <img
            src={disco}
            className={!isAudioPlayPause ? "disco_play" : "disco_pause"}
            alt=""
          />
        </div>
        <div
          className="time_play_box"
          style={{
            background: `#010101 linear-gradient(90deg, rgb(243, 190, 25) 0px, rgb(240, 248, 255) ${percentWidth}, transparent ${percentWidth}, transparent 100%)`
          }}
        >
          <div
            className={`song_time ${
              !isAudioPlayPause ? "song_time_active" : ""
            }`}
          >
            {songDuration}
          </div>
          <div className={`play_status`} onClick={btnPlayClick}>
            {isAudioPlayPause ? (
              <i className="iconfont icon_play">&#xe668;</i>
            ) : (
              <i className="iconfont icon_pause">&#xe607;</i>
            )}
          </div>
        </div>
      </div>
      <audio
        id="audio"
        preload="auto"
        ref={audioRef}
        src={songUrl}
        onTimeUpdate={onTimeUpdate}
        onPause={onPause}
        onPlay={onPlay}
        onEnded={onEnded}
      ></audio>
    </S.PlayerContainer>
  );
};

// const mapStateToProps = state => {
//   return {
//     prop: state.prop
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch: () => {
//       dispatch(actionCreator);
//     }
//   };
// };

// 将ui组件包装成容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player));
export default React.memo(Player);
