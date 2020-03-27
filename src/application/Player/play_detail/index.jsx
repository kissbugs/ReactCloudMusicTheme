/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useCallback } from "react";
import CallBackButton from "../../../components/utils/callback/CallBack";
import * as S from "./style.js";

export default memo(({ onClose }) => {
  const handleBackClick = useCallback(() => {
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  }, []);
  return (
    <S.PlayDetailContainer>
      <CallBackButton
        handleBackClick={onClose}
        // handleBackClick={handleBackClick}
        title="播放详情页"
      />
      <div className="play_detail_container">PlayDetailContainer</div>
    </S.PlayDetailContainer>
  );
});
