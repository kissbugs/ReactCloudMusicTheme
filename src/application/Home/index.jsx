/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import * as S from "./style.js";

import Banner from "../../application/Banner/index";
import NewSong from "../../application/NewSong/index";
import Recommend from "../../application/Recommend/index";
import TopMenuLayout from "../../components/utils/TopMenuLayout.jsx";

import icon_yum from "../../assets/images/yum.png"

const Home = memo(({ ...props }) => {
  const [homeMenuStatus, setHomeMenuStatus] = useState(false);
  const getClickMeneStatus = boolState => {
    setHomeMenuStatus(boolState);
  };
  return (
    <S.HomeContainer>
      <div
        className={`left_menu_box ${homeMenuStatus ? "" : "remove_left_menu"}`}
      >
        <div className="menu_box">
          <img src={icon_yum} alt="" />
          <a onClick={() => props.history.push("/albums")}>推荐歌曲</a>
          <a onClick={() => props.history.push("/discover")}>新歌速递</a>
          <a onClick={() => props.history.push("/search")}>搜索歌曲</a>
        </div>
      </div>
      <div
        className="right_content"
        style={{
          marginLeft: homeMenuStatus ? "20%" : ""
        }}
      >
        <TopMenuLayout
          history={props.history}
          getClickMeneStatus={getClickMeneStatus}
        />
        <Banner />
        <Recommend />
        <NewSong />
      </div>
    </S.HomeContainer>
  );
});

export default memo(Home);
