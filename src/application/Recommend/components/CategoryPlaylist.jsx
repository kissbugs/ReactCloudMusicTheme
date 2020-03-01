import React, { useCallback } from "react";
import "./CategoryPlaylist.scss";

export default ({ ...props }) => {
  // console.log("----categoryPlayList: ", props);
  const { categoryPlayList, ThemeColor } = props;

  const handleGenre = useCallback(() => {
    alert("详情页正在开发中")
  }, []);
  return (
    <div className="song_genre_box">
      <div className="song_genre_top">
        <div className="text">歌曲流派</div>
        <div className="more_genre">查看更多 »</div>
      </div>
      <ul className="song_genre_content">
        {categoryPlayList.map((category, index) => (
          <li
            key={index}
            data-index={index}
            onClick={handleGenre}
            style={{
              backgroundColor:
                ThemeColor[index % (ThemeColor.length - 1)].background,
              boxShadow: ThemeColor[index % (ThemeColor.length - 1)].shadow
            }}
          >
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
