/* eslint-disable no-fallthrough */
import * as actionTypes from './constants';
import produce from "immer"
import { playMode } from './../../../api/config';

const initialState = {
  fullScreen: false,
  playing: false,
  sequencePlayList: [],
  playList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  showPlayList: false,
  currentSong: {},
  speed: 1
};

export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SONG:
      draft.currentSong = action.data;
    case actionTypes.SET_FULL_SCREEN:
      draft.fullScreen = action.data;
    case actionTypes.SET_PLAYING_STATE:
      draft.playing = action.data;
    case actionTypes.SET_SEQUECE_PLAYLIST:
      draft.sequencePlayList = action.data;
    case actionTypes.SET_PLAYLIST:
      draft.playList = action.data;
    case actionTypes.SET_PLAY_MODE:
      draft.mode = action.data;
    case actionTypes.SET_CURRENT_INDEX:
      draft.currentIndex = action.data;
    case actionTypes.SET_SHOW_PLAYLIST:
      draft.showPlayList = action.data;
    case actionTypes.CHANGE_SPEED:
      draft.speed = action.data;
  }
}, initialState)