import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PageLoading from "../components/utils/page_loading/index.jsx";
import TopMenuLayout from "../basicModule/TopMenuLayout.jsx";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<PageLoading text={"页面加载中..."} />}>
      <Component {...props}></Component>
    </Suspense>
  );
};

// 注释 webpackChunkName: "xxx" 可以用于指定 chunk 的名称，在输出文件时有用
const RecommendComponent = lazy(() =>
  import(
    /* webpackChunkName: 'recommend' */ "../application/Recommend/index.jsx"
  )
);
const SongListComponent = lazy(() =>
  import(
    /* webpackChunkName: 'song-list' */ "../application/SongList/index.jsx"
  )
);
const RankComponent = lazy(() =>
  import(
    /* webpackChunkName: 'rank' */ "../application/Rank/index.jsx"
  )
);
const DjRadioComponent = lazy(() =>
  import(
    /* webpackChunkName: 'dj-radio' */ "../application/DjRadio/index.jsx"
  )
);
const SearchComponent = lazy(() =>
  import(
    /* webpackChunkName: 'search' */ "../application/Search/index.jsx"
  )
);

const DetailsComponent = lazy(() =>
  import(
    /* webpackChunkName: 'detail' */ "../application/Details/index.jsx"
  )
);

export default function Routes() {
  return (
    <React.Fragment>
      <Route path="/" component={TopMenuLayout} />
      <Switch>
        <Redirect exact from="/" to="/recommend" />
        <Route
          path="/recommend"
          component={SuspenseComponent(RecommendComponent)}
        />
        <Route
          path="/songList"
          component={SuspenseComponent(SongListComponent)}
        />
        <Route path="/rank" component={SuspenseComponent(RankComponent)} />
        <Route
          path="/djRadio"
          component={SuspenseComponent(DjRadioComponent)}
        />
        <Route path="/search" component={SuspenseComponent(SearchComponent)} />

        <Route
          path="/details"
          component={SuspenseComponent(DetailsComponent)}
        />
      </Switch>
    </React.Fragment>
  );
}
