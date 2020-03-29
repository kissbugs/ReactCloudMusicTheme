import styled from "styled-components"

export const HomeContainer = styled.div`
  .left_menu_box {
    float: left;
    position: fixed;
    top: 11px;
    width: 20%;
    text-align: center;
    .menu_box {
      a {
        cursor: pointer;
        display: block;
        padding-top: 15px;
        font-size: 14px;
        white-space: nowrap;
        @media screen and (min-width: 1024px) {
          font-size: 24px;
        }
      }
      img {
        width: 90%;
        @media screen and (min-width: 1024px) {
          max-width: 200px;
        }
      }
    }
  }
  .remove_left_menu {
    display: none;
    width: 0;
  }
`