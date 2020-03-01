import React from "react";
import MenuNavigation from "../components/menu_navigation/index.jsx";
import * as S from "./style.js";

export default props => {
  return (
    <S.TopBarContainer>
      <S.BarBox>
        <i className="iconfont lef_menu">&#xe609;</i>
        <div className="text">Musical</div>
        <i
          className="iconfont right_search"
          onClick={() => props.history.push("/search")}
        >
          &#xe6ca;
        </i>
      </S.BarBox>
      <MenuNavigation />
    </S.TopBarContainer>
  );
};
