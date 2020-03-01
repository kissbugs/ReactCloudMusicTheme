import React, { memo } from "react";
import LazyLoad from "react-lazyload";
import { playCount } from "../../../api/helper.js";
import "./RecommendList.scss";

export default ({ ...props }) => {
  // console.log("---liwei-props: ", props);
  const { recommendList } = props;
  if (recommendList.length <= 0) return "";
  return (
    <div className="recommend_list_container">
      <div className="title_and_more">
        <div className="title">推荐歌单</div>
        <div className="more_recommend">查看更多 »</div>
      </div>
      <ul className="recommend_list_box">
        {recommendList.map((item, index) => (
          <li key={index}>
            <div className="play_count_box">
              <div className="play_count">
                <div className="iconfont icon_listen">&#xe609;</div>
                {playCount(item.playCount)}
              </div>
            </div>
            <LazyLoad
              placeholder={
                <img
                  width="100%"
                  height="100%"
                  src={require("../../../assets/images/music.png")}
                  alt="music"
                />
              }
            >
              <img
                src={item.picUrl + "?param=300x300"}
                width="100%"
                height="100%"
                alt="music"
              />
            </LazyLoad>
            <div className="name">{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
