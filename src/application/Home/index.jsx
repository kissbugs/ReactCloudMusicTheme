/* eslint-disable react/display-name */
import React, { memo } from "react";
import * as S from "./style.js";

import Banner from "../../application/Banner/index";
import NewSong from "../../application/NewSong/index";
import Recommend from "../../application/Recommend/index";
import TopMenuLayout from "../../components/utils/TopMenuLayout.jsx";

const Home = memo(({ ...props }) => {
  return (
    <S.HomeContainer>
      <TopMenuLayout history={props.history} />
      <Banner />
      <Recommend />
      <NewSong />
    </S.HomeContainer>
  );
});

export default memo(Home);
