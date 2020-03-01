import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import { debounce } from "../../api/helper";
import * as S from "./style.js";

const Search = memo(({ ...props }) => {
  console.log("Search_props: ", props);
  const { hotKeyWordsList, searchSuggestList, searchResultSongsList } = props;
  const {
    getHotKeyWordsListDispatch,
    getSearchSuggestListDispatch,
    getSearchResultSongsListDispatch
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [searchSuggestName, setSearchSuggestName] = useState("");

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchSuggestName("");
    setInputValue(value);
    if (value && value != "") {
      getSearchSuggestListDispatch(value);
      getSearchResultSongsListDispatch(value);
    }
  };
  useEffect(() => {
    if (!hotKeyWordsList.length && !inputValue) {
      getHotKeyWordsListDispatch();
    }
    // getSearchSuggestListDispatch();
    // getSearchResultSongsListDispatch();
  }, [!inputValue]);

  const handleBack = useCallback(() => {
    props.history.goBack();
  }, []);

  const handleSearchSuggest = useCallback(e => {
    let name = e.currentTarget.getAttribute("data-name");
    console.log("name_name: ", name);
    setSearchSuggestName(name);
    if (name && name != "") {
      getSearchSuggestListDispatch(name);
      getSearchResultSongsListDispatch(name);
    }
  }, []);

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
            <div className="search_songs" key={index}>
              <div>
                <div className="song_name">{song.name}</div>
                <div className="song_description">
                  <span>{`${song.artists[0].name}`}</span>
                  {` - ${song.album.name || `${song.name}`}`}
                </div>
              </div>
              <i className="iconfont lef_menu">&#xe609;</i>
            </div>
          )
        )}
      </div>
    );
  };

  return (
    // bounceInDown
    <S.SearchContainer
      className={`animated ${
        window.location.pathname == "/search" ? "rollIn" : "rollOut"
      }`}
    >
      <SearchSongInput
        inputValue={inputValue}
        handleBack={handleBack}
        handleInputChange={handleInputChange}
        searchSuggestName={searchSuggestName}
      />
      {hotKeyWordsList.length > 0 && (
        <PopularSearch
          hotKeyWordsList={hotKeyWordsList}
          handleSearchSuggest={handleSearchSuggest}
          show={inputValue || searchSuggestName}
        />
      )}
      <div className="search_input_container clear_scroll_bar">
        {/* {renderSearchSingers()} */}
        {/* {renderSearchAlbum()} */}
        {renderSearchSongs()}
      </div>
    </S.SearchContainer>
  );
});

const SearchSongInput = memo(({ ...props }) => {
  const {
    inputValue,
    handleBack,
    handleInputChange,
    searchSuggestName
  } = props;
  const queryRef = useRef();
  useEffect(() => {
    queryRef.current.focus();
  }, []);
  return (
    <S.SearchSongInputContainer>
      <input
        type="text"
        ref={queryRef}
        placeholder="输入歌曲、歌手"
        value={inputValue || searchSuggestName}
        onChange={handleInputChange}
      />
      <S.IconBack className="icon_back" onClick={handleBack}>
        取消
      </S.IconBack>
    </S.SearchSongInputContainer>
  );
});

const PopularSearch = memo(({ ...props }) => {
  const { hotKeyWordsList, handleSearchSuggest, show } = props;

  // 处理对象可以被拓展
  let newHotKeyWordsList = hotKeyWordsList.map(item => Object.assign({}, item));
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
    <S.SopularSearchBox className="clear_scroll_bar" show={show}>
      <div className="title">热门搜索</div>
      <div className="popular_search_list">
        {splitedHotKeyWordsList.map((item, index) => (
          <ul className="single_search_list" key={index}>
            {item.value.map((ele, ind) => (
              <LiSection
                key={ind}
                songList={ele}
                handleSearchSuggest={handleSearchSuggest}
              />
            ))}
          </ul>
        ))}
      </div>
    </S.SopularSearchBox>
  );
});

const LiSection = memo(({ songList, handleSearchSuggest }) => {
  return (
    <li data-name={songList.searchWord} onClick={handleSearchSuggest}>
      <div
        className={`list_index ${songList.originIndex < 4 ? "hot_song" : ""}`}
      >
        {songList.originIndex + 1}
      </div>
      <div className="search_content">
        <div className="song_name_box">
          <div className="song_name">{songList.searchWord}</div>
          <img src={songList.iconUrl} alt="" />
        </div>
        <div className="song_description">{songList.content}</div>
      </div>
    </li>
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
      debounce(dispatch(actionTypes.getHotKeyWords()));
    },
    getSearchSuggestListDispatch(data) {
      debounce(dispatch(actionTypes.getSearchSuggestList(data)));
    },
    getSearchResultSongsListDispatch(data) {
      debounce(dispatch(actionTypes.getSearchResultSongList(data)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
