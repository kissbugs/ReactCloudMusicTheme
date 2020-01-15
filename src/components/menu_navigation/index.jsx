import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./style.js";

export default () => {
  const MENU_UNITS = [
    {
      name: "每日推荐",
      url: "/recommend"
    },
    {
      name: "歌单",
      url: "/songList"
    },
    {
      name: "排行榜",
      url: "/rank"
    },
    {
      name: "电台",
      url: "/djradio"
    }
  ];

  return (
    <S.MenuNavigationContainer>
      {MENU_UNITS.map((nav, index) => (
        <NavLink to={nav.url} key={index} activeClassName="active" >
          <span>{nav.name}</span>
        </NavLink>
      ))}
    </S.MenuNavigationContainer>
  );
};
