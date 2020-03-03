import React, { memo, useEffect, useState } from "react";
import * as S from "./style.js";

const Albums = memo(({ ...props }) => {

  const [back, setBack] = useState(true)
  const handleBackClick = () => {
    setBack(false);
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  };
  return (
    <S.AlbumsContainer>
      <div
        // bounceInDown
        className={`albums_container animated ${back ? "rollIn" : "rollOut"}`}
      >
        {/* <div className="back_title" onClick={() => props.history.goBack()}> */}
        <div className="back_title" onClick={handleBackClick}>
          <i className="iconfont icon_left">&#xe69d;</i>
          <div className="title">歌单列表</div>
        </div>
        <div className="album_main_picture">
          <img
            src="http://p1.music.126.net/VTW4vsN08vwL3uSQqPyHqg==/2002210674180199.jpg"
            alt=""
          />
          <div className="album_description">
            "优质华语新歌，网易云音乐每周二精选推荐。本周封面：周深,
            本周封面：周深"
          </div>
        </div>
      </div>
    </S.AlbumsContainer>
  );
});

export default Albums;
