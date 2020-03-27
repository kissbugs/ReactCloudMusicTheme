import styled from "styled-components"

export const AlbumsContainer = styled.div`
  color: #fff;
  margin: 0 15px;
  .albums_container {
    ul {
      li {
        &:last-child {
          a {
            margin-bottom: 0;
            border-bottom: none;
          }
        }
        a {
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
              min-width: 50px;
              width: 50px;
              border-radius: 8px;
            }
            .album_info {
              padding-left: 10px;
              .title, .description {
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
            color: #828282;
            font-size: 13px;
          }
        }
      }
    }
  }
`