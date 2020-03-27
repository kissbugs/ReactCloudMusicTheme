import styled from "styled-components"

export const RecommendContainer = styled.div`
  .recommend_list_container {
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
    ul.recommend_list_box {
      /* white-space: nowrap;
      overflow-y: hidden;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      padding-left: 10px; */
      li {
        margin: 0 0 15px 2.5%;
        width: 30%;
        height: 100%;
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        display: inline-block;
        vertical-align: top;
        @media screen and (min-width: 1024px) {
          max-width: 240px;
          margin: 0 0 15px 15px;
          &:first-child {
            margin-left: 10px;
          }
        }
        .count_img_box {
          position: relative;
          .play_count_box {
            position: absolute;
            font-size: 12px;
            right: 5px;
            bottom: 10px;
            border-radius: 50px;
            padding: 2px 5px;
            background: rgba(0, 0, 0, 0.65);
            color: #fff;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
            .play_count {
              display: flex;
              align-items: center;
              font-size: 12px;
              .icon_listen {
                padding-right: 3px;
                font-size: 12px;
              }
            }
          }
          img {
            width: 100%;
          }
        }
        .name {
          font-size: 12px;
          white-space: pre-wrap;
          padding-top: 5px;
          line-height: 1.1rem;
        }
      }
    }
  }

`