import styled from "styled-components"

export const SearchContainer = styled.div`
  color: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 100;
  transform-origin: right bottom;
  overflow: hidden;
  background: #151618;
  @media screen and (min-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
  }
  .search_input_container {
    margin: 0 15px;
    height: calc(95vh - 60px);
    overflow-x: hidden;
    overflow-y: scroll;
    .render_search_songs {
      .search_songs {
        padding: 12px 0;
        border-bottom: 1px solid #333;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:last-child {
          border-bottom: none;
        }
        .song_name {
          padding-bottom: 7px;
        }
        .song_description {
          font-size: 12px;
          span {
            color: blue;
            font-size: 12px;
            color: #2288e4;
          }
        }
      }
    }
  }
`

export const SearchSongInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  height: 60px;
  .input_query_box {
    width: 80%;
    display: flex;
    align-items: center;
    input {
      padding: 10px 0 10px 10px;
      border: none;
      outline: none;
      font-size: 13px;
      border-radius: 50px;
      width: 90%;
      background: #212121;
      color: #5d5d5d;
    }
    input::-webkit-input-placeholder {
      color: #5d5d5d;
    }
    input::-moz-placeholder {
      color: #5d5d5d;
    }
    input::-moz-placeholder {
      color: #5d5d5d;
    }
    input:-ms-input-placeholder {
      color: #5d5d5d;
    }
    i {
      margin-left: -35px;
    }
  }
`
export const IconBack = styled.div`
  padding: 0 10px;
`
export const SopularSearchBox = styled.div`
  margin: 0 15px;
  height: calc(95vh - 60px);
  overflow-x: hidden;
  overflow-y: scroll;
  display: ${props => props.show ? "none" : null};
  .title {
    padding-bottom: 20px;
  }
  .popular_search_list {
    ul.single_search_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      li {
        display: flex;
        align-items: center;
        .list_index {
          padding-right: 15px;
        }
        .hot_song {
          color: #cc3333;
          font-size: 17px;
          font-weight: 700;
        }
        .search_content {
          .song_name_box {
            display: flex;
            .song_name {
              max-width: 100px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              font-size: 14px;
              padding-bottom: 10px;
            }
            img {
              height: 14px;
              display: block;
              margin-left: 10px;
            }
          }
          .song_description {
            font-size: 12px;
            color: #5d5d5d;
            width: 150px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
  }
`

