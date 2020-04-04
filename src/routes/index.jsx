import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loading from "../components/utils/loading/index";
import Player from "../application/Player/index";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props}></Component>
    </Suspense>
  );
};

// 注释 webpackChunkName: "xxx" 可以用于指定 chunk 的名称，在输出文件时有用
const HomeComponent = lazy(() =>
  import(/* webpackChunkName: 'home' */ "../application/Home/index.jsx")
);
const RecommendComponent = lazy(() =>
  import(
    /* webpackChunkName: 'recommend' */ "../application/Recommend/index.jsx"
  )
);
// 专辑列表
const AlbumsComponent = lazy(() =>
  import(/* webpackChunkName: 'albums' */ "../application/Albums/index.jsx")
);
// 专辑详情列表
const AlbumsDetailComponent = lazy(() =>
  import(
    /* webpackChunkName: 'albums_detail' */ "../application/AlbumsDetails/index.jsx"
  )
);
// 更多新歌（不同种类的音乐）
const DiscoverComponent = lazy(() =>
  import(/* webpackChunkName: 'discover' */ "../application/Discover/index.jsx")
);
// TODO:
const RankComponent = lazy(() =>
  import(/* webpackChunkName: 'rank' */ "../application/Rank/index.jsx")
);
// 搜索
const SearchComponent = lazy(() =>
  import(/* webpackChunkName: 'search' */ "../application/Search/index.jsx")
);

// todo: test
const DetailsComponent = lazy(() =>
  import(/* webpackChunkName: 'detail' */ "../application/Details/index.jsx")
);

export default function Routes() {
  return (
    <React.Fragment>
      <Route path="/" component={Player} />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={SuspenseComponent(HomeComponent)} />
        <Route
          path="/recommend"
          component={SuspenseComponent(RecommendComponent)}
        />
        <Route
          path="/playlist"
          component={SuspenseComponent(AlbumsDetailComponent)}
        />
        <Route
          path="/discover"
          component={SuspenseComponent(DiscoverComponent)}
        />
        <Route path="/albums" component={SuspenseComponent(AlbumsComponent)} />
        <Route path="/rank" component={SuspenseComponent(RankComponent)} />
        <Route path="/search" component={SuspenseComponent(SearchComponent)} />

        <Route
          path="/details"
          component={SuspenseComponent(DetailsComponent)}
        />
      </Switch>
    </React.Fragment>
  );
}
