import styled from "styled-components"

export const PlayDetailContainer = styled.div`
  .call_back_box {
    padding: 0 15px;
  }
  .play_detail_container {
    /* position: relative;
    &::after {
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      background-color: rgba(0,0,0,.65);
    } */
    img {
      width: 100%;
      height: calc(100vh);
      opacity: 0.2;
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
    color: rgb(245, 245, 245);
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