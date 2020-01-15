
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { hot } from 'react-hot-loader/root';
import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store/index.js"
import PageLoading from "./components/utils/page_loading/index.jsx";
import { GlobalStyle } from "./style";
import { IconStyle } from "../src/assets/iconfont/iconfont"
// import routes from "./routes/index.jsx"
// import "./App.scss"

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<PageLoading text={"页面加载中..."} />}>
      <Component {...props}></Component>
    </Suspense>
  )
}
const RecommendComponent = lazy(() => import("./application/Recommend/index.jsx"))
const DetailsComponent = lazy(() => import("./application/Details/index.jsx"));

function App() {
  return (
    <Provider store={store}>
      {/* {routes} */}
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Switch>
          <Route exact path="/recommend" component={SuspenseComponent(RecommendComponent)} />
          <Route
            path="/details"
            component={SuspenseComponent(DetailsComponent)}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
