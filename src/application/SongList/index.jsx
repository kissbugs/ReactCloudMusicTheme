import React, { memo } from "react";
import * as S from "./style.js";

const SongList = memo(({ ...props }) => {
  console.log("SongList——props: ", props);
  return <S.SongListContainer>SongList</S.SongListContainer>;
});

export default SongList;
