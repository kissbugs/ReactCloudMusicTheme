import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PageLoading from "../components/utils/page_loading/index.jsx";
import TopMenuLayout from "../basicModule/TopMenuLayout.jsx";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<PageLoading text={"页面加载中..."} />}>
      <Component {...props}></Component>
    </Suspense>
  );
};
const RecommendComponent = lazy(() =>
  import("../application/Recommend/index.jsx")
);
const SongListComponent = lazy(() =>
  import("../application/SongList/index.jsx")
);
const RankComponent = lazy(() => import("../application/Rank/index.jsx"));
const DjRadioComponent = lazy(() => import("../application/DjRadio/index.jsx"));
const SearchComponent = lazy(() => import("../application/Search/index.jsx"));

const DetailsComponent = lazy(() => import("../application/Details/index.jsx"));

export default function Routes() {
  return (
    <React.Fragment>
      <Route path="/" component={TopMenuLayout} />
      <Switch>
        <Route
          exact
          path="/recommend"
          component={SuspenseComponent(RecommendComponent)}
        />
        <Route
          path="/songList"
          component={SuspenseComponent(SongListComponent)}
        />
        <Route path="/rank" component={SuspenseComponent(RankComponent)} />
        <Route path="/djRadio" component={SuspenseComponent(DjRadioComponent)} />
        <Route
          path="/details"
          component={SuspenseComponent(DetailsComponent)}
        />
      </Switch>
    </React.Fragment>
  );
}