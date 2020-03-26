import React from "react";
import PropTypes from "prop-types";
import * as S from "./style.js";

const PageLoading = ({ text, error }) => {
  return (
    <S.PageLoadingContainer>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      {error && (
        <div className="error">
          {"页面加载出错，请重试"}
        </div>
      )}
      {text && <p className="desc">{text}</p>}
    </S.PageLoadingContainer>
  );
};

PageLoading.propTypes = {
  text: PropTypes.string,
  error: PropTypes.string
};

export default PageLoading;
