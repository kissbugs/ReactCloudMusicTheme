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
  @media screen and (min-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
  }
  .back_title {
    display: inline-flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    padding: 0 15px;
    i {
      color: #f0bf31;
      font-size: 20px;
    }
    .title {
      color: #fff;
      padding-left: 10px;
    }
  }
  .albums_container {
    height: calc(100vh - 50px);
    overflow-y: scroll;
    .albums_main_description {
      margin: 0 15px 10px;
      .album_main_picture {
        padding: 20px 15px 15px;
        img {
          width: 200px;
          border-radius: 10px;
          margin: 0 auto;
          display: block;
        }
        .album_description {
          color: #fff;
          padding: 20px 0;
          line-height: 1.5em;
        }
      }
    }
    .albums_lists_box {
      margin: 0 15px;
      .play_list_entrance {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left_play_number {
          display: flex;
          align-items: center;
          .icon_play, .icon_pause  {
            color: #f0bf31;
            font-size: 30px;
          }
          span {
            color: #828282;
            padding-left: 10px;
          }
        }
        .right_play_menu {
          .lef_menu {
            color: #f0bf31;
            font-size: 30px;
          }
        }
      }
      ul {
        padding: 15px 0;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          border-bottom: 1px dashed #5d5d5d;
          padding-bottom: 15px;
          &:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          img {
            width: 50px;
            border-radius: 8px;
          }
          .album_info {
            padding-left: 10px;
            .title {
              color: #fff;
            }
            .description {
              color: #828282;
              font-size: 12px;
              padding-top: 10px;
            }
          }
        }
      }
    }
  }
`