import React from "react";
import MenuNavigation from "..//menu_navigation/index";
import Player from "../../application/Player/index"
import icon_music from "../../assets/images/yum.png"
import * as S from "./style.js";

export default props => {
  return (
    <S.TopBarContainer>
      <S.BarBox>
        <i className="iconfont lef_menu">&#xe615;</i>
        <img src={icon_music} alt="" />
        <i
          className="iconfont right_search"
          onClick={() => props.history.push("/search")}
        >
          &#xe622;
        </i>
      </S.BarBox>
      {/* <MenuNavigation /> */}
      {/* <Player /> */}
    </S.TopBarContainer>
  );
};
