import React from "react";
import TopBar from "../../components/top_bar/index.jsx";
import LeftSlideMenu from "../../components/left_slide_menu/index.jsx";
import * as S from "./style.js";

const Recommend = () => {
  return (
    <S.RecommendContainer>
      <TopBar />
      <LeftSlideMenu />
      <div>Recommend</div>
    </S.RecommendContainer>
  );
};

export default Recommend;
