import styled from "styled-components"

export const PageLoadingContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  .spinner {
    width: 60px;
    height: 60px;

    position: relative;
    margin: 150px auto;
    margin-bottom: 10px;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #67cf22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
  }
  .desc {
    padding: 0 15px;
    text-align: center;
    color: grey;
    font-size: 14px;
  }
  .error {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    padding: 2px 6px;
    border: 1px solid grey;
    border-radius: 8px;
    margin-top: 9px;
    text-align: center;
    color: black;
    font-size: 14px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`
