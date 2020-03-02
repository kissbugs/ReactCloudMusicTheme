import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`
const LoadingWrapper = styled.div`
    >div {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      margin: auto;
      width: 60px;
      height: 60px;
      opacity: 0.6;
      border-radius: 50%;
      background-color: #d44439;
      animation: ${loading} 1.4s infinite ease-in;
    }
    >div:nth-child(2) {
      animation-delay: -0.7s;
    }
`

const EnterLoading = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(0,0,0,.1);
  z-index: 10;
`

function Loading() {
  return (
    <React.Fragment>
      <EnterLoading>
        <LoadingWrapper>
          <div></div>
          <div></div>
        </LoadingWrapper>
      </EnterLoading>
    </React.Fragment>
  )
}

export default React.memo(Loading);