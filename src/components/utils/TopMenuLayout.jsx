import React from "react";
import MenuNavigation from "..//menu_navigation/index";
import Player from "../../application/Player/index"
import * as S from "./style.js";

export default props => {
  return (
    <S.TopBarContainer>
      <S.BarBox>
        <i className="iconfont lef_menu">&#xe615;</i>
        <div className="text">Dio Music</div>
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
