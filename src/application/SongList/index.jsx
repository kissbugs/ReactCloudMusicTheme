import React, { memo } from "react";
import * as S from "./style.js";

const SongList = memo(({ ...props }) => {
  // TODO: 抽离公共歌单列表组件
  const { splitedRecommendSongList, getSongUrl, handleSongList } = props;
  return (
    <S.UlSongListContainer>
      {splitedRecommendSongList.map((item, index) => (
        <li
          key={index}
          className={`${songUrl == getSongUrl(item.id) ? "song_active" : ""}`}
          onClick={() => handleSongList(item, index)}
        >
          <div className="left_content">
            <LazyLoad
              placeholder={
                <img width="100%" height="100%" src={music_2} alt="music" />
              }
            >
              <img
                src={item.picUrl + "?param=50x50"}
                width="100%"
                height="100%"
                alt="music"
              />
            </LazyLoad>
            {item.song && (
              <div className="album_info">
                <div className="title">{item.song.name}</div>
                {item.song.artists && (
                  <div className="description">
                    {item.song.artists.map((item, index) => `${item.name} `)}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="song_list_number">···</div>
        </li>
      ))}
    </S.UlSongListContainer>
  );
});

export default SongList;
