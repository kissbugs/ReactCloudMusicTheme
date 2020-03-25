import styled from "styled-components"

export const SlideCarouselContainer = styled.div`
  .slide_carousel_container {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    margin: 10px 0 0;
    .slider-container {
      position: relative;
      width: 98%;
      height: 160px;
      overflow: hidden;
      margin: auto;
      border-radius: 6px;
      .slider-nav {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        img {
          width: 96%;
          height: 100%;
          margin: 0 2%;
          border-radius: 8px;
        }
      }
      .swiper-pagination {
        bottom: 0;
      }
      .swiper-pagination-bullet {
        background: #fff;
        opacity: initial;
        width: 6px;
        height: 6px;
      }
      .swiper-pagination-bullet-active {
        width: 12px;
        height: 6px;
        background-color: #ff9500;
        border-radius: 3px;
      }
    }
  }
`
