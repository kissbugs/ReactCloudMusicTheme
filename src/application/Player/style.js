import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const PlayerContainer = styled.div`
  position: fixed;
  /* min-width: 225px; */
  /* background: #010101; */
  /* border-radius: 50px; */
  left: 10px;
  bottom: 10px;
  z-index: 1000;
  .media_play_container {
    display: flex;
    align-items: center;
    .disco_box {
      display: flex;
      position: relative;
      &::before, &::after {
        content: '';
        border-radius: 50%;
        left: 50%;
        top: 50%;
        position: absolute;
      }
       &::before {
        width: 3px;
        height: 3px;
        background: #010101;
        margin-left: -1.5px;
        margin-top: -1.5px;
        z-index: 1;
       }
      &::after {
        width: 40px;
        height: 40px;
        background: #ffde3e;
        margin-left: -20px;
        margin-top: -20px;
      }
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        &.play{
          animation: ${rotate} 10s infinite;
          &.pause{
            animation-play-state: paused;
          }
        }
      }
    }
    .time_play_box {
      display: flex;
      align-items: center;
      background: #010101;
      border-radius: 0 50px 50px 0;
      height: 50px;
      min-width: 150px;
      margin-left: -20px;
      padding-left: 15px;
      width: 100%;
      cursor: pointer;
      .song_time {
        width: 85px;
        color: #5f5f5f;
        font-size: 24px;
        padding: 0 10px 0 15px;
        -webkit-text-stroke: 3px;
        letter-spacing: 4px;
      }
      .song_time_active {
        color: #f5f5f5;
      }
      .play_status {
        .icon_play, .icon_pause {
          color: #f4c619;
          font-size: 30px;
        }
      }
    }
  }
`

export const AudioPlayerDetailContainer = styled.div`
  background: rgb(26, 26, 26);
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9999;
  padding: 0px;
  width: 100vw;
  overflow: hidden;
  .call_back_box {
    padding: 0 15px;
  }
  .play_detail_container {
    text-align: center;
    margin-top: 30px;
    img {
      max-width: 300px;
      border-radius: 15px;
      @media screen and (min-width: 1024px) {
        max-width: 600px;
      }
    }
  }
`
export const PlayDetailTime = styled.div`
  bottom: 150px;
  position: absolute;
  display: flex;
  align-items: center;
  left: 7.5%;
  .song_count_down, .song_total_time {
    color: #fff;
    opacity: 0.8;
    font-size: 13px;
  }
  .song_count_down {
    font-size: 16px;
    opacity: 1;
  }
`
export const PlayDetailProgressBarBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0px, 0px);
  bottom: 130px;
  width: 85%;
  .active_progress_width {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: rgb(245, 245, 245);
    border-radius: 200px;
    .play_active_width {
      position: absolute;
      width: 8px;
      height: 8px;
      will-change: left;
      top: 50%;
      transform: translate3d(0px, -52%, 0px);
      border-radius: 50%;
      background: rgb(254, 221, 39);
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        width: 28px;
        height: 28px;
      }
    }
  }
`
export const PlayDetailStatus = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0px;
  width: calc(100% - 30px);
  margin: 0px 15px;
  .detail_status_list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1024px) {
      width: 40%;
      justify-content: space-around;
      margin: 0 auto;
    }
    .iconfont {
      cursor: pointer;
      color: rgb(254,221,39);
      font-size: 30px;
      margin: 0 20px;
      &.play_pause {
        font-size: 50px;
      }
    }
  }
`