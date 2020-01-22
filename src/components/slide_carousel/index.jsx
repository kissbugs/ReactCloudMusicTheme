import React from "react";
import * as S from "./style.js";

const slideCarousel = props => {
  const { bannerList } = props;
  console.log("slide_carousel_bannerList: ", bannerList);
  if (!bannerList || bannerList.length <= 0) return null;
  return (
    <S.SlideCarouselContainer>
      <img src={bannerList[0].imageUrl} alt="" />
    </S.SlideCarouselContainer>
  );
};

export default slideCarousel;
