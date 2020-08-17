import styled from "styled-components"

export const UlSongListContainer = styled.ul`
  color: #fff;
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
`