import React, { memo } from "react";
import * as S from "./style.js";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";


const AutoplayCarousel = memo(({bannerList}) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // }
  };
  return (
    <Swiper {...params}>
      {bannerList.map((list, index) => (
        <img src={list.imageUrl} alt="" key={index} />
      ))}
    </Swiper>
  );
});
const slideCarousel = props => {
  const { bannerList } = props;
  if (!bannerList || bannerList.length <= 0) return null;
  return (
    <S.SlideCarouselContainer>
      <AutoplayCarousel bannerList={bannerList} />
    </S.SlideCarouselContainer>
  );
};

export default slideCarousel;
