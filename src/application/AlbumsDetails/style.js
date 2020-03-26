/* eslint-disable quotes */
import styled from "styled-components"

export const AlbumsContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 100;
  transform-origin: right bottom;
  overflow: hidden;
  background: #1a1a1a;
  .call_back_box {
    margin: 0 15px;
  }
  .albums_container {
    height: calc(100vh - 50px);
    overflow-y: scroll;
    .albums_main_description {
      margin: 0 15px;
      position: sticky;
      top: 0;
      padding: 20px 15px 0;
      img {
        width: 200px;
        border-radius: 10px;
        margin: 0 auto;
        display: block;
        position: sticky;
        top: 0;
      }
    }
    .albums_lists_box {
      position: relative;
      background: #1a1a1a;
      margin: 0 15px;
      .nick_name_box {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          border-radius: 50px;
          margin: 0;
        }
        .nickname {
          color: #707070;
          padding-left: 20px;
        }
      } 
      .album_description {
        color: #7b7b7b;
        padding: 15px 0;
        line-height: 1.5em;
      }
      .play_list_entrance {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #424242;
        padding: 10px 0 10px 10px;
        border-radius: 6px;
        z-index: 1;
        .left_play_number {
          display: flex;
          align-items: center;
          .icon_play, .icon_pause  {
            color: #ffdc2c;
            font-size: 30px;
          }
          span {
            color: #9c9a9a;
            padding-left: 10px;
          }
        }
        .right_play_menu {
          .lef_menu {
            color: #ffdc2c;
            font-size: 30px;
          }
        }
      }
      ul {
        padding: 15px 0;
        li {
          display: flex;
          align-items: center;
          &:last-child {
            span {
              margin-bottom: 0;
            }
            .li_box {
              margin-bottom: 0;
              border-bottom: none;
              padding-bottom: 0;
            }
          }
          span {
            color: #828282;
            padding: 0 15px 0 5px;
            font-size: 18px;
            margin-bottom: 30px;
          }
          .li_box {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 1px dashed #5d5d5d;
            padding-bottom: 15px;
            width: 100%;
            img {
              width: 50px;
              border-radius: 8px;
              opacity: 0.65;
            }
            .album_info {
              /* padding-left: 10px; */
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
        }
        .song_active {
          span, 
          .li_box .album_info .title, 
          .li_box .album_info .description{
            color: #ffdc2c;
            font-weight: 700;
          }
        }
      }
    }
  }
  .albums_container_song {
    height: calc(92vh - 50px);
  }
`