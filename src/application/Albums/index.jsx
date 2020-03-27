/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, memo, useCallback } from "react";
import { connect } from "react-redux";
import CallBackButton from "../../components/utils/callback/CallBack";
import Loading from "../../components/utils/loading/index";
import * as actionTypes from "./store/actionCreators.js";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import * as S from "./style.js";
import music_2 from "../../assets/images/music_2.png";

const Albums = memo(({ ...props }) => {
  const { getAlbumsDiapatch, albums } = props;
  const handleBackClick = useCallback(() => {
    // setBack(false);
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  }, []);

  useEffect(() => {
    getAlbumsDiapatch();
  }, []);

  return (
    <S.AlbumsContainer>
      <CallBackButton handleBackClick={handleBackClick} title="专辑列表" />
      <AlbumsList albums={albums} />
    </S.AlbumsContainer>
  );
});

const AlbumsList = memo(({ ...props }) => {
  const { albums } = props;
  if (!albums || !albums.length) return "";
  return (
    <div className="albums_container">
      <ul>
        {albums.map((item) => (
          <li key={item.id}>
            <Link
              to={{
                pathname: "/playlist",
                search: `?id=${item.id}`
              }}
            >
              <div className="left_content">
                <LazyLoad
                  placeholder={
                    <img width="100%" height="100%" src={music_2} alt="music" />
                  }
                >
                  <img
                    src={item.picUrl + "?param=50x50"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
                <div className="album_info">
                  <div className="title">{item.name}</div>
                  <div className="description">{item.copywriter}</div>
                </div>
              </div>
              <div className="song_list_number">{`${item.trackCount}首单曲`}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

const mapStateToProps = state => {
  return {
    albums: state.albums.albums,
    enterLoading: state.albums.enterLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAlbumsDiapatch() {
      dispatch(actionTypes.getAlbums());
      dispatch(actionTypes.changeEnterLoading(true));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
