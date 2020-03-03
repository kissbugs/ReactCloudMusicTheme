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
  .albums_container {
    margin: 15px 10px 10px;
    .back_title {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      i {
        color: #f0bf31;
        font-size: 20px;
      }
      .title {
        color: #fff;
        padding-left: 10px;
      }
    }
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
`