import styled from "styled-components"

export const MenuNavigationContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
  }
  .active {
    position: relative;
    color: #ff9500;
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 2px;
      background: #ff9500;
      left: 50%;
      margin-left: -25%;
      bottom: -5px;
      border-radius: 10px;
    }
  }
`