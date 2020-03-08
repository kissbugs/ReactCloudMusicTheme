import React, { memo, useEffect, useCallback, useState } from "react";
import * as S from "./style.js";

const Albums = memo(({ ...props }) => {
  const [back, setBack] = useState(true);
  const handleBackClick = useCallback(() => {
    setBack(false);
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  }, []);

  const handleSongClick = useCallback(() => {
    console.log("获取歌曲详情");
  }, []);

  const renderTopAlbumsBrief = () => {
    return (
      <div className="albums_main_description">
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
    );
  };

  const renderAlbumsLists = () => {
    return (
      <div className="albums_lists_box">
        <div className="play_list_entrance">
          <div className="left_play_number">
            <i className="iconfont icon_play">&#xe668;</i>
            <span>15</span>
            {/* <i className="iconfont icon_pause">&#xe607;</i> */}
          </div>
          {/* <div className="right_play_menu">
            <i className="iconfont lef_menu">&#xe615;</i>
          </div> */}
        </div>
        <ul>
          <li onClick={handleSongClick}>
            <img
              src="http://p1.music.126.net/VTW4vsN08vwL3uSQqPyHqg==/2002210674180199.jpg"
              alt=""
            />
            <div className="album_info">
              <div className="title">好人一生平安</div>
              <div className="description">做好人，做好事，好人好事</div>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <S.AlbumsContainer className={`animated ${back ? "rollIn" : "rollOut"}`}>
      <div className="back_title" onClick={handleBackClick}>
        <i className="iconfont icon_left">&#xe69d;</i>
        <div className="title">歌单列表</div>
      </div>
      <div className="albums_container clear_scroll_bar">
        {renderTopAlbumsBrief()}
        {renderAlbumsLists()}
      </div>
    </S.AlbumsContainer>
  );
});

export default Albums;
