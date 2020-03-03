import React, {
  memo,
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback
} from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import { debounce, getSongUrl } from "../../api/helper";
import Loading from "../../basicModule/loading/index";
import Player from "../Player/index";

import * as S from "./style.js";

const Search = memo(({ ...props }) => {
  console.log("Search_props: ", props);
  const {
    hotKeyWordsList,
    searchSuggestList,
    searchResultSongsList,
    enterLoading
  } = props;
  const {
    changeEnterLoadingDispatch,
    getHotKeyWordsListDispatch,
    getSearchSuggestListDispatch,
    getSearchResultSongsListDispatch
  } = props;

  const [searchQuery, setSearchQuery] = useState("");
  const [songUrl, setSongUrl] = useState("");

  useEffect(() => {
    if (!hotKeyWordsList.length && !searchQuery) {
      getHotKeyWordsListDispatch();
    }
    // getSearchSuggestListDispatch();
    // getSearchResultSongsListDispatch();
  }, [!searchQuery]);

  const handleBack = useCallback(() => {
    props.history.goBack();
  }, []);

  useEffect(() => {
    if (searchQuery && searchQuery != "") {
      getSearchSuggestListDispatch(searchQuery);
      getSearchResultSongsListDispatch(searchQuery);
    }
  }, [searchQuery]);

  // const renderSearchSingers = () => {
  //   // 相关歌手
  //   const searchSuggestList = searchSuggestList.artists;
  //   if (!searchSuggestList || !searchSuggestList.length) return "";
  //   return <div className="render_search_singers">渲染歌单</div>;
  // };
  // const renderSearchAlbum = () => {
  //   // 相关歌单
  //   const searchSuggestList = searchSuggestList.playlists;
  //   if (!searchSuggestList || !searchSuggestList.length) return "";
  //   return <div className="render_search_singers">渲染歌单</div>;
  // };

  console.warn("----liwei_setSongUrl", songUrl);

  const renderSearchSongs = () => {
    // 相关歌曲
    if (!searchResultSongsList || !searchResultSongsList.length) return "";
    console.log("searchResultSongsList----liwei : ", searchResultSongsList);
    return (
      <div className="render_search_songs">
        {searchResultSongsList.map((song, index) =>
          !("name" in song) ? (
            ""
          ) : (
            <div
              className="search_songs"
              key={index}
              onClick={() => setSongUrl(getSongUrl(song.id))}
            >
              <div>
                <div className="song_name">{song.name}</div>
                <div className="song_description">
                  <span>{`${song.artists[0].name}`}</span>
                  {` - ${song.album.name || `${song.name}`}`}
                </div>
              </div>
              <i className="iconfont icon_music">&#xe8b2;</i>
            </div>
          )
        )}
      </div>
    );
  };

  const renderPopularSearch = () => {
    // 处理对象可以被拓展
    let newHotKeyWordsList = hotKeyWordsList.map(item =>
      Object.assign({}, item)
    );
    if (newHotKeyWordsList && newHotKeyWordsList.length > 0) {
      newHotKeyWordsList.map((item, index) => (item.originIndex = index));
    }

    const copy = [...newHotKeyWordsList];
    const splitedHotKeyWordsList = [];
    while (copy.length) {
      const sliced = copy.splice(0, 2);
      splitedHotKeyWordsList.push({
        value: sliced
      });
    }
    // console.log("处理后的数据splitedHotKeyWordsList: ", splitedHotKeyWordsList);
    return (
      <React.Fragment>
        <S.SopularSearchBox
          className="clear_scroll_bar"
          show={searchQuery}
          songUrlBool={songUrl ? true : false}
        >
          <div className="title">热门搜索</div>
          <div className="popular_search_list">
            {splitedHotKeyWordsList.map((item, index) => (
              <ul className="single_search_list" key={index}>
                {item.value.map((ele, ind) => (
                  <li key={ind} onClick={() => setSearchQuery(ele.searchWord)}>
                    <div
                      className={`list_index ${
                        ele.originIndex < 4 ? "hot_song" : ""
                      }`}
                    >
                      {ele.originIndex + 1}
                    </div>
                    <div className="search_content">
                      <div className="song_name_box">
                        <div className="song_name">{ele.searchWord}</div>
                        <img src={ele.iconUrl} alt="" />
                      </div>
                      <div className="song_description">{ele.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </S.SopularSearchBox>
        {songUrl && <Player songUrl={songUrl} />}
      </React.Fragment>
    );
  };

  const handleSearchQuery = q => {
    console.warn("q: ", q);
    setSearchQuery(q);
    if (!q) return;
    getSearchSuggestListDispatch(q);
    getSearchResultSongsListDispatch(q);
    changeEnterLoadingDispatch(true);
  };

  const songUrlBool= songUrl ? true : false;

  return (
    // bounceInDown
    <S.SearchContainer
      className={`animated ${
        window.location.pathname == "/search" ? "rollIn" : "rollOut"
      }`}
    >
      <SearchSongInput
        newSearchQuery={searchQuery}
        setSongUrl={setSongUrl}
        handleBack={handleBack}
        handleSearchQuery={handleSearchQuery}
        changeEnterLoadingDispatch={changeEnterLoadingDispatch}
      />
      {hotKeyWordsList.length > 0 && renderPopularSearch()}
      <div
        className="search_input_container clear_scroll_bar"
        style={{
          height: songUrlBool && "calc(85vh - 60px)"
        }}
      >
        {/* {renderSearchSingers()} */}
        {/* {renderSearchAlbum()} */}
        {renderSearchSongs()}
      </div>
      {enterLoading ? <Loading></Loading> : null}
    </S.SearchContainer>
  );
});

const SearchSongInput = memo(({ ...props }) => {
  const {
    setSongUrl,
    newSearchQuery,
    handleBack,
    handleSearchQuery,
    changeEnterLoadingDispatch
  } = props;

  const [searchQuery, setSearchQuery] = useState("");

  const queryRef = useRef();
  useEffect(() => {
    queryRef.current.focus();
  }, []);

  useEffect(() => {
    // 解决点击热搜中的歌曲名显示在input框中
    let curSearchQuery = searchQuery;
    if (newSearchQuery !== searchQuery) {
      curSearchQuery = newSearchQuery;
      queryRef.current.value = newSearchQuery;
      changeEnterLoadingDispatch(true);
    }
    setSearchQuery(curSearchQuery);
  }, [newSearchQuery]);

  const handleSearchQueryDebounce = useMemo(() => {
    return debounce(handleSearchQuery, 500);
  }, [handleSearchQuery]);

  useEffect(() => {
    // 很实用的技巧
    handleSearchQueryDebounce(searchQuery);
  }, [searchQuery]);

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchQuery(value);
    changeEnterLoadingDispatch(true);
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
    setSongUrl("");
    queryRef.current.value = "";
    queryRef.current.focus();
  };

  return (
    <S.SearchSongInputContainer>
      <div className="input_query_box">
        <input
          type="text"
          ref={queryRef}
          placeholder="输入歌曲、歌手"
          onChange={handleInputChange}
        />
        {searchQuery && (
          <i className="iconfont icon_close" onClick={clearSearchQuery}>
            &#xe65c;
          </i>
        )}
      </div>
      <S.IconBack className="icon_back" onClick={handleBack}>
        取消
      </S.IconBack>
    </S.SearchSongInputContainer>
  );
});

const mapStateToProps = state => {
  console.log("---liwei---state: ", state);
  return {
    hotKeyWordsList: state.search.hotKeyWordsList,
    searchSuggestList: state.search.searchSuggestList,
    searchResultSongsList: state.search.searchResultSongsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHotKeyWordsListDispatch() {
      dispatch(actionTypes.getHotKeyWords());
    },
    getSearchSuggestListDispatch(data) {
      dispatch(actionTypes.getSearchSuggestList(data));
    },
    changeEnterLoadingDispatch(data) {
      dispatch(actionTypes.changeEnterLoading(data));
    },
    getSearchResultSongsListDispatch(data) {
      dispatch(actionTypes.getSearchResultSongList(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
