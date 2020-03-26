import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { playCount } from "../../../api/helper.js";
import music_2 from "../../../assets/images/music_2.png";
import "./NewSongList.scss";

export default ({ ...props }) => {
  const { newSongList } = props;
  if (!newSongList.length) return "";

  // let newRecommendSongList = newSongList.map(item => Object.assign({}, item));
  // const splitedRecommendSongList = [];
  // while (newRecommendSongList.length) {
  //   const sliced = newRecommendSongList.splice(0, 5);
  //   splitedRecommendSongList.push({
  //     value: sliced
  //   });
  // }
  // console.log("splitedRecommendSongList----: ", splitedRecommendSongList);
  return (
    <div className="new_song_list_container">
      <div className="title_and_more">
        <div className="title">新歌速递</div>
        <Link
          className="more_recommend"
          to={{
            pathname: "/albums"
          }}
        >
          查看更多 »
        </Link>
      </div>
      <div className="song_list_container">
        <ul>
          {newSongList.map((item, index) => (
            <li key={index}>
              <Link
                to={{
                  pathname: "/playlist",
                  search: `?id=${item.id}`
                }}
              >
                <div className="left_content">
                  <LazyLoad
                    placeholder={
                      <img
                        width="100%"
                        height="100%"
                        src={music_2}
                        alt="music"
                      />
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
                          {item.song.artists.map(
                            (item, index) =>
                              // index == item.song.artists.length - 1
                              // ? `${item.name}`:
                              `${item.name} `
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="song_list_number">···</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
