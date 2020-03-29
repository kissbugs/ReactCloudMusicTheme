
import styled from "styled-components"

export const NewSongListContainer = styled.div`
  padding-top: 20px;
  .title_and_more {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 10px 15px;
    .more_recommend {
      display: flex;
      align-items: center;
      color: #999;
      font-size: 14px;
      i {
        color: #ffdc2c;
        font-size: 12px;
        padding-left: 5px;
      }
    }
  }
  .song_list_container {
    padding: 0 10px;
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
        cursor: pointer;
        .left_content {
          display: flex;
          align-items: center;
          img {
            position: relative;
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
  }
`

