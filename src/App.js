import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { hot } from 'react-hot-loader/root';
import React from "react";
import { Provider } from "react-redux"
import store from "./store/index.js"
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.jsx"

import { GlobalStyle } from "./globalStyle.js";
import { IconStyle } from "../src/assets/iconfont/iconfont"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
