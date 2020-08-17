import styled from "styled-components"

export const DiscoverContainer = styled.div`
  color: #49c114;
  margin: 10px;
  p {
    padding: 10px 0;
    line-height: 1.5em;
  }
  .tabs {
    width: 100%;
    height: 40px;
    overflow-y: scroll;
    white-space: nowrap;
    margin: 10px;
  }
  .tabs_fixed {
    z-index: 11;
    position: sticky;
    top: 0;
  }
  
  .tab {
    color: #8c8c8c;
    font-weight: normal;
    display: inline-block;
    margin: 0 10px;
  }
  
  .active {
    position: relative;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    &::after  {
      content: '';
      width: 30%;
      background: #ffdc2c;
      bottom: -7px;
      height: 2px;
      left: 50%;
      margin-left: -15%;
      right: 0;
      position: absolute;
      border-radius: 50px;
    }
  }
`
export const SongListBox = styled.div`
  .music_type_box {
    position: relative;
    margin-bottom: 15px;
    img {
      width: 100%;
      height: 100px;
      filter: blur(3px);
    }
    .title {
      position: absolute;
      bottom: 15px;
      left: 15px;
      font-size: 30px;
      color: #fff;
      span {
        font-size: 15px;
        color: #dcdcdc;
        padding-left: 10px;
      }
    }
  }
`