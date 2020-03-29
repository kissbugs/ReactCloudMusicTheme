/* eslint-disable react/prop-types */
import React, { useState } from "react";
import icon_yum from "../../assets/images/yum.png";
import * as S from "./style.js";

// eslint-disable-next-line react/display-name
export default props => {
  const [clickMeneStatus, setClickMeneStatus] = useState(false);
  const handleLeftMenu = () => {
    setClickMeneStatus(!clickMeneStatus);
    props.getClickMeneStatus(!clickMeneStatus);
  };
  return (
    <S.TopBarContainer>
      <S.BarBox>
        <i className="iconfont lef_menu" onClick={handleLeftMenu}>
          &#xe615;
        </i>
        <img src={icon_yum} alt="" />
        <i
          className="iconfont right_search"
          onClick={() => props.history.push("/search")}
        >
          &#xe622;
        </i>
      </S.BarBox>
    </S.TopBarContainer>
  );
};
