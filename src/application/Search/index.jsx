import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators.js";
import * as S from "./style.js";

const Search = memo(({ ...props }) => {
  console.log("Search_props: ", props);
  const { hotKeyWordsList } = props;
  const {
    getHotKeyWordsListDispatch,
    getSearchSuggestListDispatch,
    getSearchResultSongsListDispatch
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [searchSuggestName, setSearchSuggestName] = useState("");

  const handleInputChange = e => {
    const value = e.target.value;
    console.log("value: ", value);
    setInputValue(value);
  };
  useEffect(() => {
    getHotKeyWordsListDispatch();
    getSearchSuggestListDispatch();
    // getSearchResultSongsListDispatch();
  }, []);

  const handleBack = useCallback(() => {
    props.history.goBack();
  }, []);
  const handleSearchSuggest = useCallback(e => {
    let name = e.currentTarget.getAttribute("data-name");
    console.log("name_name: ", name);
    setSearchSuggestName(name);
  }, []);

  return (
    // bounceInDown
    <S.SearchContainer
      className={`animated ${
        window.location.pathname == "/search" ? "rollIn" : "rollOut"
      }`}
    >
      {
        <SearchSongInput
          inputValue={inputValue}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          searchSuggestName={searchSuggestName}
        />
      }
      {hotKeyWordsList.length > 0 && (
        <PopularSearch
          hotKeyWordsList={hotKeyWordsList}
          handleSearchSuggest={handleSearchSuggest}
        />
      )}
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
  const { hotKeyWordsList, handleSearchSuggest } = props;

  // 处理对象可以被拓展
  let newHotKeyWordsList = hotKeyWordsList.map(item => Object.assign({}, item));

  if (newHotKeyWordsList && newHotKeyWordsList.length > 0) {
    newHotKeyWordsList.map((item, index) => (item.originIndex = index));
    console.log("newHotKeyWordsList: ", newHotKeyWordsList);
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
    <S.SopularSearchBox className="clear_scroll_bar">
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
      dispatch(actionTypes.getHotKeyWords());
    },
    getSearchSuggestListDispatch() {
      dispatch(actionTypes.getSearchSuggestList());
    },
    getSearchResultSongsListDispatch() {
      dispatch(actionTypes.getSearchResultSongList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
