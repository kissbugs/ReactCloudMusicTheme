/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import Loading from "../../components/utils/loading/index";
import * as S from "./style.js";
import Swiper from "swiper";
import "swiper/css/swiper.css";

const Banner = memo(({ ...props }) => {
  const { bannerList, enterLoading } = props;
  const { getBannerListDataDispatch } = props;

  useEffect(() => {
    if (!bannerList.length) {
      getBannerListDataDispatch();
    }
  }, [bannerList]);

  return enterLoading ? <Loading /> : <SlideCarousel bannerList={bannerList} />;
});

const AutoplayCarousel = memo(({ bannerList }) => {
  useEffect(() => {
    if (bannerList.length) {
      new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }, []);
  return (
    <div className="slide_carousel_container">
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map(slider => (
            <div className="swiper-slide" key={slider.imageUrl}>
              <div className="slider-nav">
                <img
                  src={slider.imageUrl}
                  width="100%"
                  height="100%"
                  alt="推荐"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
});

const SlideCarousel = props => {
  const { bannerList } = props;
  if (!bannerList || bannerList.length <= 0) return null;
  return (
    <S.SlideCarouselContainer>
      <AutoplayCarousel bannerList={bannerList} />
    </S.SlideCarouselContainer>
  );
};

const mapStateToProps = state => {
  return {
    bannerList: state.banner.bannerList,
    enterLoading: state.banner.enterLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBannerListDataDispatch() {
      dispatch(actionTypes.getBannerList());
      dispatch(actionTypes.changeEnterLoading(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
