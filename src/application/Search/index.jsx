import React, { useState, useEffect } from "react";
import * as S from "./style.js";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = e => {
    const value = e.target.value;
    console.log("value: ", value);
    setInputValue(value);
  };
  return (
    <S.SearchContainer>
      <input
        type="text"
        placeholder="输入歌曲、歌手"
        value={inputValue}
        onChange={handleInputChange}
      />
    </S.SearchContainer>
  );
};
