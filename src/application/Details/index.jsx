import React from "react";
import { connect } from "react-redux";
import { getAddNum, getMinusNum } from "./store/actionCreators.js";
import * as S from "./style.js";

function Details({ ...props }) {
  return (
    <S.DetailContainer>
      <span className="iconfont search">&#xe6ca;</span>
      <span className="iconfont menu">&#xe609;</span>
      <h2>我是详情页, 我是详情页: {props.Num.details}</h2>
      <button onClick={() => props.getAddNum(1)}>点我增_1</button>
      <button onClick={() => props.getMinusNum(1)}>点我减_1</button>
    </S.DetailContainer>
  );
}

const mapStateToProps = state => {
  return {
    Num: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddNum: num => dispatch(getAddNum(num)),
    getMinusNum: num => dispatch(getMinusNum(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Details));
