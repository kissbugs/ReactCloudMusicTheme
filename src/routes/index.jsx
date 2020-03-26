import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loading from "../components/utils/loading/index";
import TopMenuLayout from "../components/utils/TopMenuLayout.jsx";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<Loading />}>
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
// 专辑列表
const AlbumsComponent = lazy(() =>
  import(/* webpackChunkName: 'albums' */ "../application/Albums/index.jsx")
);
// 专辑列表
const AlbumsDetailComponent = lazy(() =>
  import(
    /* webpackChunkName: 'albums_detail' */ "../application/AlbumsDetails/index.jsx"
  )
);

const SongListComponent = lazy(() =>
  import(
    /* webpackChunkName: 'song_list' */ "../application/SongList/index.jsx"
  )
);
const RankComponent = lazy(() =>
  import(/* webpackChunkName: 'rank' */ "../application/Rank/index.jsx")
);
const SearchComponent = lazy(() =>
  import(/* webpackChunkName: 'search' */ "../application/Search/index.jsx")
);

const DetailsComponent = lazy(() =>
  import(/* webpackChunkName: 'detail' */ "../application/Details/index.jsx")
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
          path="/playlist"
          component={SuspenseComponent(AlbumsDetailComponent)}
        />
        <Route path="/albums" component={SuspenseComponent(AlbumsComponent)} />
        <Route
          path="/songList"
          component={SuspenseComponent(SongListComponent)}
        />
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
