import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
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
  z-index: 100;
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
        &.disco_play, &.disco_pause {
          animation: ${rotate} 10s infinite;
        }
        &.disco_pause{
          animation-play-state: paused;
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
      .song_time {
        width: 85px;
        color: #5f5f5f;
        font-size: 24px;
        padding: 0 10px 0 15px;
        -webkit-text-stroke: 3px;
        letter-spacing: 4px;
      }
      .song_time_active {
        color: #e2174e;
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