import React from "react";
import MenuNavigation from "../components/menu_navigation/index.jsx";
import * as S from "./style.js";

export default () => {
  return (
    <S.TopBarContainer>
      <S.BarBox>
        <div className="iconfont lef_menu">&#xe609;</div>
        <div className="text">Musical</div>
        <div className="iconfont right_search">&#xe6ca;</div>
      </S.BarBox>
      <MenuNavigation />
    </S.TopBarContainer>
  );
};
