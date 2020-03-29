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
  .left_play_number {
    display: flex;
    align-items: center;
    background: #424242;
    padding: 5px 0 5px 10px;
    border-radius: 6px;
    margin: 0 0 20px;
    .icon_play, .icon_pause  {
      color: #ffdc2c;
      font-size: 30px;
    }
    span {
      color: #9c9a9a;
      padding-left: 10px;
    }
  }
  ul {
    li.song_active {
      .left_content .album_info {
        .title,
        .description {
          color: #f4c619;
        }
      }
    }
    li {
      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      border-bottom: 1px dashed #5d5d5d;
      padding-bottom: 15px;
      .left_content {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          border-radius: 8px;
          display: block;
        }
        .album_info {
          padding-left: 10px;
          .title,
          .description {
            @media screen and (max-width: 375px) {
              max-width: 200px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
          .title {
            color: #fff;
            line-height: 1.3em;
          }
          .description {
            color: #828282;
            font-size: 12px;
            padding-top: 10px;
            line-height: 1.3em;
          }
        }
      }
      .song_list_number {
        white-space: nowrap;
        color: #828282;
        font-size: 13px;
      }
    }
  }
`