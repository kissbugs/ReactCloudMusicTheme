/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, memo, useCallback } from "react";
import { connect } from "react-redux";
import CallBackButton from "../../components/utils/callback/CallBack";
import Loading from "../../components/utils/loading/index";
import * as actionTypes from "./store/actionCreators.js";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as S from "./style.js";

const Albums = memo(({ ...props }) => {
  const { getAlbumsDiapatch, albums, enterLoading } = props;
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
      {enterLoading ? <Loading /> : <AlbumsList albums={albums} />}
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
                search: `?id=${item.id}`,
              }}
            >
              <div className="left_content">
                <img src={item.picUrl + "?param=50x50"} alt="music" />
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

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums,
    enterLoading: state.albums.enterLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbumsDiapatch() {
      dispatch(actionTypes.getAlbums());
      dispatch(actionTypes.changeEnterLoading(true));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Albums));
