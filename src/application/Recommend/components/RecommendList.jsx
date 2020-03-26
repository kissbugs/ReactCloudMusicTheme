import React, { memo } from "react";
import { Link } from "react-router-dom";
import { sliceStringText } from "../../../api/helper";
import LazyLoad from "react-lazyload";
import { playCount } from "../../../api/helper.js";
import music_2 from "../../../assets/images/music_2.png";
import "./RecommendList.scss";

export default ({ ...props }) => {
  const { recommendList } = props;
  if (!recommendList.length) return "";


  let newRecommendList = recommendList.map(item => Object.assign({}, item));
  const splitedRecommendList = [];
  while (newRecommendList.length) {
    const sliced = newRecommendList.splice(0, 3);
    splitedRecommendList.push({
      value: sliced
    });
  }
  console.log("splitedRecommendList: ", splitedRecommendList);
  return (
    <div className="recommend_list_container">
      <div className="title_and_more">
        <div className="title">推荐歌单</div>
        <Link
          className="more_recommend"
          to={{
            pathname: "/albums"
          }}
        >
          查看更多 »
        </Link>
      </div>
      <ul className="recommend_list_box">
        {recommendList.map((item, index) => (
          <li key={index}>
            <Link
              to={{
                pathname: "/playlist",
                search: `?id=${item.id}`
              }}
            >
              <div className="count_img_box">
                <div className="play_count_box">
                  <div className="play_count">
                    <i className="iconfont icon_listen">&#xe8b2;</i>
                    {playCount(item.playCount)}
                  </div>
                </div>
                <LazyLoad
                  placeholder={
                    <img width="100%" height="100%" src={music_2} alt="music" />
                  }
                >
                  <img
                    src={item.picUrl + "?param=300x300"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              {/* <div className="name">{sliceStringText(item.name, 30)}</div> */}
              <div className="name">{item.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
