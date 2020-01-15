import React from 'react'
import * as S from "./style.js"

export default () => {
  return (
    <S.TopBarContainer>
      <div className="iconfont lef_menu">&#xe609;</div>
      <div className="text">Musical</div>
      <div className="iconfont right_search">&#xe6ca;</div>
    </S.TopBarContainer>
  );
}